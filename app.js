const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Listing=require('./models/listing.js');
const path=require('path');
const methodOverride = require('method-override');
const ejsMate= require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema   } = require('./schema.js');
const Review=require('./models/review.js');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,'/public')));


connectDB().then(()=>{
    console.log("connected to Db");
}).catch((err)=>console.log(err));

async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.get('/',(req,res)=>{
    res.send("Welcome to Wanderlust");
});

const validateListing=(req,res,next)=>{
     let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=> el.message).join(',');
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

const validateReview=(req,res,next)=>{
     let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=> el.message).join(',');
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//index route
app.get('/listings', wrapAsync(async(req,res)=>{
    let allListings = await Listing.find({});
    res.render('listings/index.ejs',{allListings});
}))

//adding new route  
app.get('/listings/new',(req,res)=>{
    res.render('listings/new.ejs');
})


//show route
app.get('/listings/:id', wrapAsync(async (req,res)=>{
    let{id}=req.params;
    const listing = await Listing.findById(id).populate('reviews');
    res.render('listings/show.ejs',{listing});
}))

//create route
app.post('/listings',validateListing, wrapAsync(async(req,res,next)=>{
    let newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
}));

//edit route
app.get('/listings/:id/edit', wrapAsync(async (req,res)=>{
     let{id}=req.params;
    const listing = await Listing.findById(id);
    res.render('listings/edit',{listing});
}))

//update route
app.put('/listings/:id',validateListing, wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}))

//DELETE listings ROUTE

app.delete('/listings/:id', wrapAsync(async (req,res)=>{
    let {id}=req.params;
   let deletedlisting= await Listing.findByIdAndDelete(id);
   console.log(deletedlisting);
   res.redirect('/listings');
}))

//Reviews
//post route for adding review
app.post('/listings/:id/reviews',validateReview,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    const review = new Review(req.body.review);
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    res.redirect(`/listings/${id}`);
}));

//Delete review route
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

// app.get('/testListing',async (req,res)=>{
//     let sampleListing=new Listing({
//         title:'My new villa',
//         description:'By the beach',
//         price:1200,
//         location:'Calangute,Goa',
//         country:'India', 
//     });
//     await sampleListing.save();
//     console.log("Listing saved");
//     res.send('Successful testing');
// });

app.use((req,res,next)=>{
    next(new ExpressError(404,"Page Not found!"));
});

app.use((err,req,res,next)=>{
    let{statusCode=500,message='Something went wrong'}=err;
    res.status(statusCode).render('error.ejs',{message});
    // res.status(statusCode).send(message);
})

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});