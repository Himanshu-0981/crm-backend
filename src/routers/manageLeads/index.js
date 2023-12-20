const app = require("express");
const {
  handleNewLeads,
} = require("../../controllers/manageLeads/controller.newLead");
const userAuthentication = require("../../middlewares/middleware.auth");

const router = app.Router();

router.post("/new-leads", userAuthentication, handleNewLeads);

module.exports = router;
