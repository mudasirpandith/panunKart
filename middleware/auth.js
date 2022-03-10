const jwt = require("jsonwebtoken");
const user=require('../Schema/user')
const authenticate = async (req, res, next) => {
  try {
    var token = req.cookies.panunKart;

    const verifyToken = jwt.verify(token, "kejddhbejhydbegyuhv");

    const userFound = await user.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!userFound) {
      throw new Error("User Not Found");
    }
    req.token = token;
    req.userFound = userFound;
  } catch (err) {
    console.log(err);
  }
  next();
};

module.exports = authenticate;
