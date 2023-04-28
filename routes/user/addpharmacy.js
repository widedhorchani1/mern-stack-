const pharmacy = require("../../models/pharmacy");
module.exports = async (req, res) => {
  try {
    let { name, email, password, phone, address, garde } = req.body;
   
    let newPhar = new pharmacy ({
      name,
      email,
      password,
      phone,
      address,
     garde,
    });
    await newPhar.save();
    res.status(200).json({
      status: true,
      message: "Your account has been created successfully",
    });
  } catch (error) {
    if (error.errors.name) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.name.message });
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
    } else if (error.errors.address) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.address.message });
    } else if (error.errors.garde) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.garde.message });
    }
  }
};
