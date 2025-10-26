const mongoose=require('mongoose');
const initData = require('./data.js');
const Listing=require('../models/listing.js');


connectDB().then(()=>{
    console.log("connected to Db");
}).catch((err)=>console.log(err));

async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust'); 
}

const initDb = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: '68fa6b6f39b6cf74b00fb719'}));
    await Listing.insertMany(initData.data);
    console.log('Data was initialized');
}

initDb();