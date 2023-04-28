const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
  name: {
    type: String,
    required: [true, "The user name is a required field"],
  },
  email: {
    type: String,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid e-mail"],
  },
  password: {
    type: String,

    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      "Invalid password",
    ],
  },
  phone: {
    type: String,
    required: [true, "The phone is a required field"],
  },

  address: {
    type: String,
    required: [true, "The address is a required field"],
  },

  garde: {
    type: Boolean,
    required: [true, "The garde is a required field"],
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = pharmacy = mongoose.model("pharmacy", pharmacySchema);
