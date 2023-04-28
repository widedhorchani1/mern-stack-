const pharmacy = require("../../models/pharmacy");

module.exports = async (req, res) => {
  try {
    let { address } = req.params;
    let Pharmacy = await pharmacy.find();
    res.status(200).json({ status: true, data: Pharmacy });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};
