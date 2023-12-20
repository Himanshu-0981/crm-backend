// converting env file into string

const ENV_CONFIG = {
  PORT: String(process.env.PORT),
  MONGODB_URI: String(process.env.MONGODB_URI),
  JWT_SECRET_KEY: String(process.env.JWT_SECRET_KEY),
};

module.exports = ENV_CONFIG;
