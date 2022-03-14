var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  userPhone: { type: Number },
  password: {
    type: String,
  },

  products: [
    {
      product: {
        productName: String,
        productDes: String,
        productID: String,
        productPrice: Number,
        productImage: String,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  myorders: [
    {
      myorder: {
        CheckoutPrice: Number,
        receipt: String,
        orderId: String,
        status: String,
        date: String,
      },
    },
  ],
});
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, "kejddhbejhydbegyuhv");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
const user = mongoose.model("user", userSchema);
module.exports = user;
