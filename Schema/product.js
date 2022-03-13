const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productDes: String,
  productLongDes: String,
  productID: String,
  productCompany: String,
  productPrice: Number,
  productCategory: String,
  productImage: String,
  reviews: [
    {
      review: {
        userName: String,
        rev: String,
        date: String,
      },
    },
  ],
});

const products = mongoose.model("Products", productSchema);
module.exports = products;
