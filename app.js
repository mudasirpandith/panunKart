const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
require("dotenv").config({ path: "./config.env" });
app.use(bodyParser.urlencoded({ extended: false }));
const shortid = require("shortid");
const Razorpay = require("razorpay");
const razorpay = new Razorpay({
  key_id: process.env.RAZORKEY,
  key_secret: process.env.RAZORSECRET,
});
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(require("./routes/route"));
require("./db/conn");
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(process.env.PORT || 4000, (err) => {
  if (err) throw err;
  console.log("Server listening on port", 4000);
});
