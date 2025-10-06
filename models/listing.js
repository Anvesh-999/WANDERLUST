const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
       type: String,
       required:true
    },
    description:String,
    image:{
        filename:String,
        url:{
            type:String,
        default:"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
        set:(v)=> v==='' 
        ? 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg': v
        }
    },
    price: {
        type:Number,
        required:true,
        default:0
    },   
    location:String,
    country:String
});

const Listing=mongoose.model('Listing',listingSchema);
module.exports = Listing;