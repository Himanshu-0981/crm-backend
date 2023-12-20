const app = require("express");
const userAuthentication = require("../../middlewares/middleware.auth");
const {
  handleManageCity,
  handleCityList,
  handleUpdateCity,
} = require("../../controllers/manageMasters/controller.city");
const {
  handleManageState,
  handleStateList,
  handleUpdateState,
} = require("../../controllers/manageMasters/controller.state");
const {
  handleManageBranch,
  handleBranchList,
  handleUpdateBranch,
} = require("../../controllers/manageMasters/controller.branch");
const {
  handleManageDesignation,
  handleDesignationList,
  handleUpdateDesignation,
} = require("../../controllers/manageMasters/controller.designation");

const router = app.Router();

// ### manage masters ###

// !## CITY
// manage city
router.post("/manage-city", userAuthentication, handleManageCity);

// get city list
router.get("/city-list", handleCityList);

// update city
router.patch("/update-city/:id", userAuthentication, handleUpdateCity);

// !## STATE
// manage state
router.post("/manage-state", userAuthentication, handleManageState);

// get state list
router.get("/state-list", handleStateList);

// update state
router.patch("/update-state/:id", userAuthentication, handleUpdateState);

// !## BRANCH
// manage branch
router.post("/manage-branch", userAuthentication, handleManageBranch);

// get branch list
router.get("/branch-list", handleBranchList);

// update branch
router.patch("/update-branch/:id", userAuthentication, handleUpdateBranch);

// !## DESIGNATION
// manage designation
router.post("/manage-designation", userAuthentication, handleManageDesignation);

// get designation list
router.get("/designation-list", handleDesignationList);

// update branch
router.patch(
  "/update-designation/:id",
  userAuthentication,
  handleUpdateDesignation
);

module.exports = router;
