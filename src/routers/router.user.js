const app = require("express");
const { handleUserSignUp } = require("../controllers/controller.user");

const router = app.Router();

router.post("/signup", handleUserSignUp);

module.exports = router;
