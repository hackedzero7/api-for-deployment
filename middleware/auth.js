const User = require('../models/User');
const JWt = require('jsonwebtoken');
exports.isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7, authHeader.length);
  } else {
    console.log(error);
  }

  try {
    const payload = JWt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(payload._id);

    next();
  } catch (error) {
    console.log(error);
  }
};

exports.authorizedRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(400).json({
        success: false,
        message: `Role: ${req.user.role} is not allowed this resource`,
      });
    }
    next();
  };
};
