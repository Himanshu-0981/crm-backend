const app = require("express");
const {
  handleUserSignUp,
  handleUserLogin,
  handleVerifyOTP,
} = require("../controllers/controller.user");

const router = app.Router();

// users
router.post("/signup", handleUserSignUp);
router.post("/login", handleUserLogin);

// OTP
router.post("/verify-otp", handleVerifyOTP);

module.exports = router;
