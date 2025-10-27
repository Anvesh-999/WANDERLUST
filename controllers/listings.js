const Listing = require("../models/listing.js");

module.exports.index = async(req,res)=>{
    let allListings = await Listing.find({});
    res.render('listings/index.ejs',{allListings});
};

module.exports.renderNewForm = (req,res)=>{
    res.render('listings/new.ejs');
};

module.exports.showListing = async (req,res)=>{
        let{id}=req.params;
        const listing = await Listing.findById(id).populate({path:'reviews',populate:{path:"author"}}).populate('owner');
        if(!listing){
            req.flash('error',"The listing your'e trying to access does not exist.");
            return res.redirect('/listings');
        }
        res.render('listings/show.ejs',{listing});
};

module.exports.createListing = async(req,res,next)=>{
    let newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    await newListing.save();
    req.flash('success','Successfully made a new listing!');
    res.redirect('/listings');
};

module.exports.renderEditForm = async (req,res)=>{
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
};

module.exports.updateListing = async(req,res)=>{
    let {id}=req.params;
    if(typeof req.body.listing.image === 'string'){
        req.body.listing.image = { url: req.body.listing.image };
    }
    
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash('success','Successfully updated Listing!');
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res)=>{
    let {id}=req.params;
   let deletedlisting= await Listing.findByIdAndDelete(id);
   console.log(deletedlisting);
   req.flash('success','Successfully Deleted a listing');
   res.redirect('/listings');
};