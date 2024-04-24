const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

module.exports.authProtect = async (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.userId).select('-password')
      next()
    }
    catch (err) {
      console.error(err)
      res.status(401)
      throw new Error('Unauthorized')
    }
  }
  else {
    res.status(401)
    throw new Error('Unauthorized, no token')
  }
}