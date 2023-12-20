const designationModel = require("../../models/manageMasters/model.designation");
const sendResponse = require("../../utils/util.response");
const sendError = require("../../utils/util.error");

const handleManageDesignation = async (req, res) => {
  const { designation, status } = req.body;
  try {
    if (designation && status) {
      const designationData = new designationModel({
        designation,
        status,
      });
      const savedDesignation = await designationData.save();
      sendResponse(res, 201, true, "Data saved successfully", savedDesignation);
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

const handleDesignationList = async (req, res) => {
  try {
    const designationList = await designationModel
      .find({})
      .select("designation status createdAt");
    if (designationList)
      return sendResponse(res, 200, true, "Got data successfully", {
        designationList,
      });
    sendResponse(res, 404, "error while getting designation list");
  } catch (err) {
    sendResponse(res, 400, false, "error while getting designation list");
  }
};

const handleUpdateDesignation = async (req, res) => {
  const designationId = req.params.id;
  const updatedDesignationData = req.body;

  try {
    const updatedDesignation = await designationModel.findByIdAndUpdate(
      designationId,
      { $set: updatedDesignationData },
      { new: true }
    );

    if (updatedDesignation) {
      return sendResponse(res, 200, true, "Branch updated successfully", {
        updatedDesignation,
      });
    } else {
      sendResponse(res, 404, "Branch not found");
    }
  } catch (err) {
    console.error(err);
    sendResponse(res, 500, false, "Error while updating branch");
  }
};

module.exports = {
  handleManageDesignation,
  handleDesignationList,
  handleUpdateDesignation,
};
