const cityModel = require("../../models/manageMasters/model.city");
const sendResponse = require("../../utils/util.response");
const sendError = require("../../utils/util.error");

const handleManageCity = async (req, res) => {
  const { state, city, status } = req.body;
  try {
    if (state && city && status) {
      const cityData = new cityModel({
        state,
        city,
        status,
      });

      const savedCity = await cityData.save();
      sendResponse(res, 201, true, "Data saved successfully", savedCity);
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

const handleCityList = async (req, res) => {
  try {
    const cityList = await cityModel
      .find({})
      .select("city state status createdAt");
    if (cityList)
      return sendResponse(res, 200, true, "Got data successfully", {
        cityList,
      });
    sendResponse(res, 404, "error while getting list");
  } catch (err) {
    sendResponse(res, 400, false, "error while getting city list");
  }
};

const handleUpdateCity = async (req, res) => {
  const cityId = req.params.id;
  const updatedCityData = req.body;

  try {
    const updatedCity = await cityModel.findByIdAndUpdate(
      cityId,
      { $set: updatedCityData },
      { new: true }
    );

    if (updatedCity) {
      return sendResponse(res, 200, true, "City updated successfully", {
        updatedCity,
      });
    } else {
      sendResponse(res, 404, "City not found");
    }
  } catch (err) {
    console.error(err);
    sendResponse(res, 500, false, "Error while updating city");
  }
};

module.exports = { handleManageCity, handleCityList, handleUpdateCity };
