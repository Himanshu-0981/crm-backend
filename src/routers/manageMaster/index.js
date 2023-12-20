const app = require("express");
const {
  handleManageCity,
  handleCityList,
  handleUpdateCity,
} = require("../../controllers/manageMasters/controller.city");

const router = app.Router();

// ### manage masters ###
// manage city
router.post("/manage-city", handleManageCity);

// get list
router.get("/city-list", handleCityList);

// update city
router.patch("/update-city/:id", handleUpdateCity);

module.exports = router;
