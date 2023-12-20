const app = require("express");
const {
  handleNewCountry,
  handleCountryList,
  handleUpdateCountry,
} = require("../../controllers/manageProducts/controller.newCountry");
const userAuthentication = require("../../middlewares/middleware.auth");

const router = app.Router();

// new country
router.post("/new-country", userAuthentication, handleNewCountry);

// list of all country
router.get("/country-list", handleCountryList);

// update country
router.patch("/update-country/:id", userAuthentication, handleUpdateCountry);

module.exports = router;
