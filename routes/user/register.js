const user = require("../../models/user");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    let { userName, email, password, phone, address, userImg } = req.body;
    let testuser = await user.findOne({ email, phone });
    if (testuser) {
      return res.status(400).json({
        status: false,
        error: "E-mail or Phone number already exist , please try another one",
      });
    }
    let salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let newUser = new user({
      userName,
      email,
      password: hashedPassword ,
      phone,
      address,
      userImg,
    });
    await newUser.save();
    res.status(200).json({
      status: true,
      message: "Your account has been created successfully",
    });
  } catch (error) {
    if (error.errors.userName) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.userName.message });
    } else if (error.errors.email) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.email.message });
    } else if (error.errors.password) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.password.message });
    } else if (error.errors.phone) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.phone.message });
    }
    if (error.errors.address) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.address.message });
    }
  }
};
