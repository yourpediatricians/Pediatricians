const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const User = require('../models/userModel')

const client = new OAuth2Client()

module.exports.initUser = async (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.userId).select('-accountInfo.password')
    }
    catch (err) {
      console.error(err)
      // return res.json({
      //   success: false,
      //   msg: 'Invalid token'
      // })
      // throw new Error('Unauthorized')
    }
  }
  else {
    // return res.json({
    //   success: false,
    //   msg: 'No token'
    // })
    // throw new Error('Unauthorized, no token')
  }
  next()
}

module.exports.googleAuthProtect = async (req, res, next) => {
  try {
    const token = req.body.credential
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    })
    req.payload = ticket.getPayload()
    next()
  }
  catch (err) {
    console.log(err)
    return res.json({
      success: false,
      msg: err.msg
    })
  }
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}