const User = require("../../models/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const user = require("../../models/user");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    let { password, email } = req.body;
    let User = await user.findOne({ email });
    if (!User) {
      return res.status(400).json({
        status: false,
        message: "Wrong Email or Password, please try again",
      });
    }
    let testPassword = await bcrypt.compare(password, User.password);
    if (!testPassword) {
      return res.status(400).json({
        status: false,
        message: "Wrong Email or Password, please try again",
      });
    }
    let token = await jwt.sign(
      {
        id: User._id,
        email: User.email,
        isUser: User.isUser,
        isAdmin: User.isAdmin
      },
      process.env.KEY,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      status: true,
      message: "Your are logging in successfully",token
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
     if (error.errors.email) {
       return res
         .status(401)
         .json({ status: false, error: error.errors.email.message });
     } else if (error.errors.password) {
       return res
         .status(401)
         .json({ status: false, error: error.errors.password.message });
     } 
  }
};
