// converting env file into string

const ENV_CONFIG = {
  PORT: String(process.env.PORT),
  MONGODB_URI: String(process.env.MONGODB_URI),
  JWT_SECRET_KEY: String(process.env.JWT_SECRET_KEY),
  NODEMAILER_HOST: String(process.env.NODEMAILER_HOST),
  NODEMAILER_USER_EMAIL: String(process.env.NODEMAILER_USER_EMAIL),
  NODEMAILER_USER_PASSWORD: String(process.env.NODEMAILER_USER_PASSWORD),
};

module.exports = ENV_CONFIG;
