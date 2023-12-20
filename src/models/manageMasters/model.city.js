const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    city: {
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

const cityModel = mongoose.model("city", citySchema);

module.exports = cityModel;
