const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    state: {
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

const stateModel = mongoose.model("state", stateSchema);

module.exports = stateModel;
