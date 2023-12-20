const app = require("express");
const userAuthentication = require("../../middlewares/middleware.auth");
const {
  handleNewCountry,
  handleCountryList,
  handleUpdateCountry,
} = require("../../controllers/manageProducts/controller.country");
const {
  handleNewProduct,
  handleProductList,
  handleUpdateProduct,
} = require("../../controllers/manageProducts/controller.product");

const router = app.Router();

// ! ### MANAGE COUNTRY ###
// new country
router.post("/new-country", userAuthentication, handleNewCountry);

// list of all country
router.get("/country-list", handleCountryList);

// update country
router.patch("/update-country/:id", userAuthentication, handleUpdateCountry);

// !### MANAGE PRODUCT ###
// new product
router.post("/new-product", userAuthentication, handleNewProduct);

// list of all product
router.get("/product-list", handleProductList);

// update product
router.patch("/update-product/:id", userAuthentication, handleUpdateProduct);

module.exports = router;
