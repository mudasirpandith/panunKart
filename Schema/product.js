const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productDes: String,
  productID: String,
  productPrice:Number,
  productImage: String,
});

const products = mongoose.model("Products", productSchema);
module.exports = products;
