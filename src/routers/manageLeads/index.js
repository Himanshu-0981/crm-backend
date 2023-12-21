const app = require("express");
const {
  handleNewLeads,
  handleLeadList,
} = require("../../controllers/manageLeads/controller.newLead");
const userAuthentication = require("../../middlewares/middleware.auth");

const router = app.Router();

// new leads
router.post("/new-leads", userAuthentication, handleNewLeads);

// lead ist
router.get("/lead-list", handleLeadList);

module.exports = router;
