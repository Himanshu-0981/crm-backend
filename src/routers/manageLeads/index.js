const app = require("express");
const {
  handleNewLeads,
} = require("../../controllers/manageLeads/controller.newLead");

const router = app.Router();

router.post("/new-leads", handleNewLeads);

module.exports = router;
