const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "The username is a required field"],
  },
  email: {
    type: String,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid e-mail",
      "The e-mail is a required field",
    ],
  },
  password: {
    type: String,

    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      "password must contain a  minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    ],
  },
  phone: {
    type: String,
    required: [true, "The phone  is a required field"],
  },

  address: {
    type: String,
    required: [true, "The address is a required field"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "pharmacy",
  },
  userImg: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/User.svg/2048px-User.svg.png",
  },
  isUser: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
});

module.exports = user = mongoose.model("user", userSchema);
