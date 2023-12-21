const newLeadsModel = require("../../models/manageLeads/model.newLeads");
const sendError = require("../../utils/util.error");
const sendResponse = require("../../utils/util.response");

const handleNewLeads = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    alternateNumber,
    gender,
    message,
    leadSource,
    comment,
  } = req.body;

  try {
    if (firstName && email && phone && gender && leadSource) {
      const newLeads = new newLeadsModel({
        firstName,
        lastName,
        email,
        phone,
        dob,
        alternateNumber,
        gender,
        message,
        leadSource,
        comment,
      });

      const savedLeads = await newLeads.save();
      sendResponse(res, 201, true, "Data saved successfully", savedLeads);
    } else {
      sendResponse(res, 400, false, "Fill all the require fields");
    }
  } catch (err) {
    console.log(err.message);
    sendError(res, err.message);
  }
};

const handleLeadList = async (req, res) => {
  try {
    const leadList = await newLeadsModel.find({});
    if (leadList) {
      sendResponse(res, 200, true, "Got Data successfully", leadList);
    } else {
      sendResponse(res, 404, false, "Error while getting lead lists");
    }
  } catch (err) {
    console.log(err.message);
    sendError(res, err);
  }
};

module.exports = { handleNewLeads, handleLeadList };
