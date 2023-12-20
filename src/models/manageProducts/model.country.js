const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const countryModel = mongoose.model("country", countrySchema);

module.exports = countryModel;
