const app = require("express");
const {
  handleUserSignUp,
  handleUserLogin,
} = require("../controllers/controller.user");

const router = app.Router();

router.post("/signup", handleUserSignUp);
router.post("/login", handleUserLogin);

module.exports = router;
