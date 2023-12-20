const jwt = require("jsonwebtoken");

const userModel = require("../models/model.user");
const sendError = require("../utils/util.error");
const hash = require("../utils/util.hash");
const sendResponse = require("../utils/util.response");
const jwtSecretKey = require("../config/env_config").JWT_SECRET_KEY;
const compare = require("../utils/util.compare");
// const sendVerifyMail = require("../utils/util.sendVerifyMail");

const handleUserSignUp = async (req, res) => {
  const { name, email, phone, address, password, confirmPassword } = req.body;

  try {
    if (name && email && phone && address && password && confirmPassword) {
      const checkExistedUser = await userModel.findOne({ email });

      if (!checkExistedUser) {
        if (password === confirmPassword) {
          // hashing the password
          const hashPassword = await hash(password);
          const user = new userModel({
            name,
            email,
            phone,
            address,
            password: hashPassword,
          });
          const userData = await user.save();

          // creating jwt token
          const token = jwt.sign({ userId: user?._id }, jwtSecretKey, {
            expiresIn: "5d",
          });

          // if (userData) {
          //   sendVerifyMail(req?.body?.name, req?.body?.email, userData?._id);
          // }

          sendResponse(res, 201, true, "User signup successfully", {
            token,
            user: {
              name,
              email,
            },
          });
        } else {
          sendResponse(
            400,
            false,
            "Password and confirm password doesn't match"
          );
        }
      } else {
        sendResponse(res, 409, false, "User already exists");
      }
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await userModel.findOne({ email });

      if (user) {
        // decrypting and comparing the password
        const isMatch = await compare(password, user?.password);
        if (isMatch) {
          const token = jwt.sign({ userId: user?._id }, jwtSecretKey, {
            expiresIn: "5d",
          });

          sendResponse(res, 200, true, "user login successfully", {
            token,
            user: {
              email,
            },
          });
        } else {
          sendResponse(
            res,
            401,
            false,
            "Email or password doesn't match. Try again"
          );
        }
      } else {
        sendResponse(res, 404, false, "user not found please signup");
      }
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

module.exports = { handleUserSignUp, handleUserLogin };
