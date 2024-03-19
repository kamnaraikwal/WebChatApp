const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is mandatory"],
  },

  email: {
    type: String,
    required: [true, "email is mandatory"],
  },

  password: {
    type: String,
    required: [true, "password is mandatory"],
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },

  notification: {
    type: Array,
    default: [],
  },

  seenNotification: {
    type: Array,
    default: [],
  },
});

//user is collection name in database
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
