const newLeadsSchema = require("../../models/manageLeads/model.newLeads");
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
      const newLeads = new newLeadsSchema({
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

module.exports = { handleNewLeads };
