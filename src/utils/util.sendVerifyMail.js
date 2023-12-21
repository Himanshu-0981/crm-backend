const nodemailer = require("nodemailer");
const otpModel = require("../models/model.otp");
const ENV_CONFIG = require("../config/env_config");

const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const sendVerifyMail = async (name, email, userId) => {
  try {
    const OTP = generateOTP();

    const newOTP = new otpModel({
      userId,
      OTP,
    });
    await newOTP.save();

    const transporter = nodemailer.createTransport({
      host: ENV_CONFIG.NODEMAILER_HOST,
      port: 465,
      auth: {
        user: ENV_CONFIG.NODEMAILER_USER_EMAIL,
        pass: ENV_CONFIG.NODEMAILER_USER_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `Test <${ENV_CONFIG.NODEMAILER_USER_EMAIL}>`,
      to: email,
      subject: "For verification mail",
      text: `Your verification code is: ${OTP}`,
      html: `<p>Hi ${name} , please enter the following OTP to verify your email: <strong>${OTP}</strong></p>`,
    });

    console.log("Email has been sent successfully", info.response);
  } catch (error) {
    console.error("Error sending email or saving OTP:", error.message);
  }
};

module.exports = sendVerifyMail;
