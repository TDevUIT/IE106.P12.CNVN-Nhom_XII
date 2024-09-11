const jwt = require('jsonwebtoken');
const doenv=require('dotenv');
doenv.config();
const generateToken = (userId, username, productIds) => {
  const secretKey = process.env.JWT_TOKEN_SECRET;

  const payload = {
    userId,
    username,
    productIds
  };
  const expirationTime = Math.floor(Date.now() / 1000) + 7200;

  const options = {
    expiresIn: expirationTime
  };

  const token = jwt.sign(payload, secretKey, options);

  return token;
};

const verifyToken = (token) => {
    const secretKey = process.env.JWT_TOKEN_SECRET;
  
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
     // console.error('JWT Verification Error:', error);
      throw error;
    }
};


module.exports = {
  generateToken,
  verifyToken,
 
};