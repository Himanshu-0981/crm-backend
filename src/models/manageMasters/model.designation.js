const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema(
  {
    designation: {
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

const designationModel = mongoose.model("designation", designationSchema);

module.exports = designationModel;
