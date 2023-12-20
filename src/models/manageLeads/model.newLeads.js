const mongoose = require("mongoose");

const newLeadsSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
    },
    alternateNumber: {
      type: Number,
    },
    gender: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    leadSource: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const newLeadModel = mongoose.model("new-lead", newLeadsSchema);

module.exports = newLeadModel;
