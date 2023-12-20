const branchModel = require("../../models/manageMasters/model.branch");
const sendResponse = require("../../utils/util.response");
const sendError = require("../../utils/util.error");

const handleManageBranch = async (req, res) => {
  const { branch, status } = req.body;
  try {
    if (branch && status) {
      const branchData = new branchModel({
        branch,
        status,
      });
      const savedBranch = await branchData.save();
      sendResponse(res, 201, true, "Data saved successfully", savedBranch);
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

const handleBranchList = async (req, res) => {
  try {
    const branchList = await branchModel
      .find({})
      .select("branch status createdAt");
    if (branchList)
      return sendResponse(res, 200, true, "Got data successfully", {
        branchList,
      });
    sendResponse(res, 404, "error while getting branch list");
  } catch (err) {
    sendResponse(res, 400, false, "error while getting branch list");
  }
};

const handleUpdateBranch = async (req, res) => {
  const branchId = req.params.id;
  const updatedBranchData = req.body;

  try {
    const updatedBranch = await branchModel.findByIdAndUpdate(
      branchId,
      { $set: updatedBranchData },
      { new: true }
    );

    if (updatedBranch) {
      return sendResponse(res, 200, true, "Branch updated successfully", {
        updatedBranch,
      });
    } else {
      sendResponse(res, 404, "Branch not found");
    }
  } catch (err) {
    console.error(err);
    sendResponse(res, 500, false, "Error while updating branch");
  }
};

module.exports = { handleManageBranch, handleBranchList, handleUpdateBranch };
