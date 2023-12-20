const bcrypt = require("bcrypt");

const compare = async (userPassword, dbPassword) => {
  return await bcrypt.compare(userPassword, dbPassword);
};

module.exports = compare;
