const express = require('express');
const router = express.Router(); 
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require('../models/listing.js');
const { isLoggedIn , isOwner, validateListing } = require('../middleware.js');
const listingController = require('../controllers/listings.js');
const multer = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });


router.get('/search', async (req, res) => {
  const query = req.query.q?.trim() || '';
  const category = req.query.category?.trim() || '';


  const categoryMap = {
    Trending: 'villa',
    Rooms: 'house',
    'Iconic citys': 'apartment',
    Mountains: 'cabin',
    Castles: 'castle',
    'Amazing pools': 'villa',
    Camping: 'tent',
    Farms: 'farmhouse',
    Arctic: 'yurt',
  };


  const mappedCategory = categoryMap[category] || category;

  let filter = {};
  let allListings = [];

  
  const searchRegex = query ? new RegExp(query.split(' ').join('|'), 'i') : null;

  
  if (query && mappedCategory) {
    filter = {
      category: { $regex: new RegExp(`^${mappedCategory}$`, 'i') },
      $or: [
        { title: searchRegex },
        { location: searchRegex },
        { country: searchRegex },
        { description: searchRegex },
      ],
    };
  }
 
  else if (query) {
    filter = {
      $or: [
        { title: searchRegex },
        { location: searchRegex },
        { country: searchRegex },
        { description: searchRegex },
      ],
    };
  }
 
  else if (mappedCategory) {
    if (category === 'Trending') {
      filter = { price: { $gte: 3000 } }; // Customize threshold
    } else {
      filter = { category: { $regex: new RegExp(`^${mappedCategory}$`, 'i') } };
    }
  }

 
  allListings = await Listing.find(filter);

  if (allListings.length === 0 && mappedCategory) {
    const categoryListings = await Listing.find({
      category: { $regex: new RegExp(`^${mappedCategory}$`, 'i') },
    });

    if (categoryListings.length > 0) {
      return res.render('listings/index', {
        allListings: categoryListings,
        searchQuery: query,
        filterCategory: category,
        fallbackMessage: `No results for "${query}", showing all ${category} listings.`,
      });
    }
  }

  if (category === 'Trending') {
    allListings.sort((a, b) => b.price - a.price);
  }

  res.render('listings/index', {
    allListings,
    searchQuery: query,
    filterCategory: category,
    fallbackMessage: allListings.length === 0 ? 'No listings found.' : null,
  });
});



router.get('/filter/:category', async (req, res) => {
  const category = req.params.category;
  const query = req.query.q || '';
  res.redirect(`/listings/search?category=${category}&q=${query}`);
});

router.route("/")
.get(wrapAsync(listingController.index))
.post( isLoggedIn,upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing));

//adding new route
router.get('/new', isLoggedIn, listingController.renderNewForm);

//edit route
router.get('/:id/edit', isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


module.exports = router;