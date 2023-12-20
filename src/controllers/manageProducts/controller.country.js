const countryModel = require("../../models/manageProducts/model.country");
const sendResponse = require("../../utils/util.response");
const sendError = require("../../utils/util.error");

const handleNewCountry = async (req, res) => {
  const { country, countryCode, status } = req.body;
  try {
    if (country && countryCode && status) {
      const countryData = new countryModel({
        country,
        countryCode,
        status,
      });
      const savedCountry = await countryData.save();

      sendResponse(res, 201, true, "Data saved successfully", savedCountry);
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

const handleCountryList = async (req, res) => {
  try {
    const countryList = await countryModel
      .find({})
      .select("country countryCode status createdAt");
    if (countryList)
      return sendResponse(res, 200, true, "Got data successfully", {
        countryList,
      });
    sendResponse(res, 404, "error while getting list");
  } catch (err) {
    sendError(res, err);
  }
};

const handleUpdateCountry = async (req, res) => {
  const countryId = req.params.id;
  const updatedCountryData = req.body;

  try {
    const updatedCountry = await countryModel.findByIdAndUpdate(
      countryId,
      { $set: updatedCountryData },
      { new: true }
    );
    if (updatedCountry) {
      return sendResponse(res, 200, true, "Country updated successfully", {
        updatedCountry,
      });
    } else {
      sendResponse(res, 404, "Country not found");
    }
  } catch (err) {
    console.error(err);
    sendError(res, err);
  }
};

module.exports = {
  handleNewCountry,
  handleCountryList,
  handleUpdateCountry,
};
