const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  category:{
    type:String,
    require:true
  },
  description: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  offpercentage: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
