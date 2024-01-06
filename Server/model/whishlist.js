const mongoose = require("mongoose");

const whishlistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  imagePath: {
    type:[String],
    required: true,
  },

});

const whishlistModel = mongoose.model("Whishlist", whishlistSchema);
 module.exports=whishlistModel