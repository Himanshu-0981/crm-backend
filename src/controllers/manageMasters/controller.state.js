const stateModel = require("../../models/manageMasters/model.state");
const sendResponse = require("../../utils/util.response");
const sendError = require("../../utils/util.error");

const handleManageState = async (req, res) => {
  const { country, state, status } = req.body;
  try {
    if (state && country && status) {
      const stateData = new stateModel({
        state,
        country,
        status,
      });

      const savedState = await stateData.save();
      sendResponse(res, 201, true, "Data saved successfully", savedState);
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

const handleStateList = async (req, res) => {
  try {
    const stateList = await stateModel
      .find({})
      .select("country state status createdAt");
    if (stateList)
      return sendResponse(res, 200, true, "Got data successfully", {
        stateList,
      });
    sendResponse(res, 404, "error while getting list");
  } catch (err) {
    sendResponse(res, 400, false, "error while getting state list");
  }
};

const handleUpdateState = async (req, res) => {
  const stateId = req.params.id;
  const updatedStateData = req.body;

  try {
    const updatedState = await stateModel.findByIdAndUpdate(
      stateId,
      { $set: updatedStateData },
      { new: true }
    );

    if (updatedState) {
      return sendResponse(res, 200, true, "State updated successfully", {
        updatedState,
      });
    } else {
      sendResponse(res, 404, "State not found");
    }
  } catch (err) {
    console.error(err);
    sendResponse(res, 500, false, "Error while updating state");
  }
};

module.exports = { handleManageState, handleStateList, handleUpdateState };
