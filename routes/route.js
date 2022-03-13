const express = require("express");
const products = require("../Schema/product");
const Route = express.Router();
const user = require("../Schema/user");
require("../db/conn");
const authenticate = require("../middleware/auth");
Route.get("/user", async (req, res) => {
  const data = await user.find({});
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "No Documnent published yet" });
  }
});
Route.get("/getProducts", async (req, res) => {
  const productsFound = await products.find({});
  if (productsFound) {
    res.status(200).json(productsFound);
  } else {
    res.status(400).json({ message: "Cart is empty" });
  }
});
Route.get("/auth", authenticate, async (req, res) => {
  res.status(200).json(req.userFound);
});

Route.post("/register", async (req, res) => {
  const { userName, userPhone, password } = req.body;
  console.log(userName + " " + userPhone + " " + password);
  const already = await user.findOne({ userName: userName });
  if (already) {
    res.status(400).json({ message: "User Already Exists" });
  } else {
    const newuser = new user({
      userName,
      userPhone,
      password,
    });
    const saved = await newuser.save();
    if (saved) {
      res.status(200).json({ message: "User Registered" });
    } else {
      res.status(400).json({ message: "Error occured" });
    }
  }
});

Route.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const userFound = await user.findOne({ userName: userName });
  if (userFound) {
    if (userFound.password == password) {
      token = await userFound.generateAuthToken();
      res.cookie("panunKart", token, {
        expires: new Date(Date.now() + 258920000),
        httpOnly: true,
      });
      res.status(200).json({ message: "Logged In sucessfully" });
    } else {
      res.status(400).json({ message: "Invalid Credentails" });
    }
  } else {
    res.status(400).json({ message: "Invalid Credentails" });
  }
});

Route.post("/addcart/:productName", async (req, res) => {
  const productName = req.params.productName;
  const { EuserName } = req.body;

  console.log(EuserName);
  if (EuserName === "") {
    res.status(400).json({ message: "Login To Add" });
  } else {
    const findUser = await user.findOne({ userName: EuserName });

    const productFound = await products.findOne({ productName: productName });
    findUser.products = findUser.products.concat({ product: productFound });
    findUser.save();

    res.status(200).json(findUser);
  }
});
Route.get("/getSingleproduct/:productName", async (req, res) => {
  const productname = req.params.productName;
  const productDetail = await products.find({ productName: productname });
  if (productDetail) {
    res.status(200).json(productDetail);
  } else {
    res.status(400).json({ message: "Product Loadinng error" });
  }
});

Route.post("/add/product", async (req, res) => {
  const {
    productName,
    productDes,
    productLongDes,
    productID,
    productCompany,
    productPrice,
    productCategory,
    productImage,
  } = req.body;

  const newproduct = new products({
    productName,
    productDes,
    productLongDes,
    productID,
    productCompany,
    productPrice,
    productCategory,
    productImage,
  });
  const productAdded = await newproduct.save();
  if (productAdded) {
    res.status(200).json({ message: "Product Added" });
  } else {
    res.status(400).json({ message: "Product adding Failed" });
  }
});

Route.post("/addreview", async (req, res) => {
  const { RuserName, reviewData, RproductName } = req.body;
  console.log(RuserName + " " + reviewData + " " + RproductName);
  const productFound = await products.findOne({ productName: RproductName });
  if (productFound) {
    productFound.reviews = productFound.reviews.concat({
      review: {
        userName: RuserName,
        rev: reviewData,
      },
    });
    const added = await productFound.save();
    if (added) {
      res.status(200).json({ message: "Review added" });
    } else {
      res.status(400).json({ message: "Review not added" });
    }
  } else {
    res.status(400).json({ message: "Error" });
  }
});
Route.get("/logout", (req, res) => {
  res.clearCookie();
});
module.exports = Route;
