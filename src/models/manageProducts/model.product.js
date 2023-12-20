const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    product: {
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

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
