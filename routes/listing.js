const express= require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require('../models/listing.js');
const { isLoggedIn , isOwner,validateListing} = require('../middleware.js');


//index route
router.get('/', wrapAsync(async(req,res)=>{
    let allListings = await Listing.find({});
    res.render('listings/index.ejs',{allListings});
}))

//adding new route
router.get('/new', isLoggedIn, (req,res)=>{
    res.render('listings/new.ejs');
})


//show route
router.get('/:id', wrapAsync(async (req,res)=>{
    let{id}=req.params;
    const listing = await Listing.findById(id).populate({path:'reviews',populate:{path:"author"}}).populate('owner');
    if(!listing){
        req.flash('error',"The listing your'e trying to access does not exist.");
        return res.redirect('/listings');
    }
    res.render('listings/show.ejs',{listing});
}))

//create route
router.post('/', isLoggedIn,validateListing, wrapAsync(async(req,res,next)=>{
    let newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    await newListing.save();
    req.flash('success','Successfully made a new listing!');
    res.redirect('/listings');
}));

//edit route
router.get('/:id/edit', isLoggedIn,isOwner, wrapAsync(async (req,res)=>{
     let{id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash('error',"The listing your'e trying to access does not exist.");
        return res.redirect('/listings');
    }
    if (!listing.image || !listing.image.url) {
        listing.image = { url: "https://example.com/default-image.jpg" };
    }
    req.flash('success','Successfully edited a listing');
    res.render('listings/edit',{listing});
}))

//update route
router.put('/:id',isLoggedIn,isOwner,validateListing, wrapAsync(async(req,res)=>{
    let {id}=req.params;
    if(typeof req.body.listing.image === 'string'){
        req.body.listing.image = { url: req.body.listing.image };
    }
    
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash('success','Successfully updated Listing!');
    res.redirect(`/listings/${id}`);
}))

//DELETE listings ROUTE

router.delete('/:id',isLoggedIn,isOwner,wrapAsync(async (req,res)=>{
    let {id}=req.params;
   let deletedlisting= await Listing.findByIdAndDelete(id);
   console.log(deletedlisting);
   req.flash('success','Successfully Deleted a listing');
   res.redirect('/listings');
}))


module.exports = router;