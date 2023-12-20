const mongoose = require("mongoose");
const ENV_CONFIG = require("../config/env_config");

const DB_URL = ENV_CONFIG.MONGODB_URI;

(module.exports = dbConnect =
  async () => {
    try {
      const success = await mongoose.connect(DB_URL);
      if (success) return console.log("database connected successfully");
      return console.log("something went wrong");
    } catch (err) {
      console.log("error while connecting to database", err.message);
    }
  })();
