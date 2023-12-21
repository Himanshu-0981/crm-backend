const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  OTP: {
    type: String,
    required: true,
  },
});

const otpModel = mongoose.model("OTP", otpSchema);

module.exports = otpModel;
