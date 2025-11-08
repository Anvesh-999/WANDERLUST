const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review.js');

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  image: {
    filename: String,
    url: String
  },

  price: {
    type: Number,
    required: true,
    default: 0
  },

  location: {
    type: String
  },

  country: {
    type: String
  },

  geometry: {
    type: {
      type: String,
      enum: ['Point'], // Must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },

  category: {
    type: String,
    enum: [
      'apartment',
      'house',
      'condo',
      'cabin',
      'villa',
      'bungalow',
      'farmhouse',
      'castle',
      'dorm',
      'tent',
      'yurt'
    ],
    required: false
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

listingSchema.post('findOneAndDelete', async (listing) => {
  if (listing) {
    await Review.deleteMany({
      _id: { $in: listing.reviews }
    });
  }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;