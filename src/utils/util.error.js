const sendError = (res, error) => {
  return res.status(500).send({
    success: false,
    message: "Internal Server Error",
    error: error?.message,
  });
};

module.exports = sendError;
