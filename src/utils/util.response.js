const sendResponse = (res, status, success, message, prop) => {
  return res.status(status).send({
    success,
    message,
    prop,
  });
};

module.exports = sendResponse;
