const jwt = require('jsonwebtoken')

const jwtSecretKey = require('../config/env_config').JWT_SECRET_KEY
const sendResponse = require('../utils/util.response');

const userAuthentication = async (req, res, next) => {
  try {
    const {authorization} = req.headers;
    
    if(authorization && authorization?.startsWith("Bearer")){
        const token = authorization?.split(" ")[1];
        const {userId} = jwt.verify(token,jwtSecretKey);
        req?.user = {userId}
        next()
    }else {
        sendResponse(res,false,'Token not found')
    }

  } catch (err) {
    console.log(err.message)
    sendResponse(res,false,'UnAuthorized Token')
  }
};

module.exports = userAuthentication;
