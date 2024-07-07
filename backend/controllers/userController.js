const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const generateToken = require('../utils/generateToken')
const { createAccountFromGoogle } = require('../utils/accounts')
const { sendVerificationToken } = require('../utils/sendVerificationToken')

module.exports.registerUser = async (req, res) => {
  const { name, phone, email, password } = req.body

  const user = await User.findOne({ 'accountInfo.email': email })

  if (user) {
    if (user.isVerified)
      return res.status(401).json({
        success: false,
        message: 'User already exists'
      })
    else {
      await User.deleteOne({ _id: user._id })
    }
    // throw new Error('User already exists')
  }

  const newUser = await User.create({
    accountInfo: {
      accountType: 'local',
      email: email,
      password: password
    },
    userInfo: {
      name: name,
      phone: phone
    }
  })

  if (newUser) {
    // generateToken(res, newUser._id)
    await sendVerificationToken(newUser)
    res.status(201).json({
      success: true,
      // userInfo: {
      //   _id: newUser._id,
      //   name: newUser.userInfo.name,
      //   email: newUser.accountInfo.email,
      //   plan: newUser.userInfo.plan
      // }
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}

module.exports.verifyUser = async (req, res) => {
  const token = req.query.token
  // console.log(token)
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
    if (err) {
      // console.log(err)
      return res.json({
        success: false,
        message: 'Token Verification failed'
      })
    }
    else {
      // console.log('hi')
      const user = await User.findOne({ _id: decoded.data._id })
      if (user) {
        user.isVerified = true
        await user.save()
        return res.status(200).json({
          success: true,
          message: 'Token Verified Successfully'
        })
      }
      else {
        return res.json({
          success: false,
          message: 'Token Verification failed'
        })
      }
    }
  });
}

module.exports.loginGoogle = async (req, res) => {
  const { email, name, sub } = req.payload
  let user = await User.findOne({ 'accountInfo.email': email })

  if (!user) {
    user = await createAccountFromGoogle(email, name, sub)
    generateToken(res, user._id)
    return res.json({
      success: true,
      userInfo: {
        _id: user._id,
        name: user.userInfo.name,
        email: user.accountInfo.email,
        plan: user.userInfo.plan
      }
    })
  } else {
    if (user.accountInfo.accountType === 'google' && sub === user.accountInfo.googleId) {
      generateToken(res, user._id)
      return res.json({
        success: true,
        userInfo: {
          _id: user._id,
          name: user.userInfo.name,
          email: user.accountInfo.email,
          plan: user.userInfo.plan
        }
      })
    }

    if (user.accountInfo.accountType === 'local') {
      generateToken(res, user._id)
      return res.json({
        success: true,
        userInfo: {
          _id: user._id,
          name: user.userInfo.name,
          email: user.accountInfo.email,
          plan: user.userInfo.plan
        }
      })
    }
  }

  res.json({
    success: false
  })
}

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ 'accountInfo.email': email })

  if (user && user.isVerified && user.accountInfo.accountType === 'local' && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.json({
      success: true,
      userInfo: {
        _id: user._id,
        name: user.userInfo.name,
        email: user.accountInfo.email,
        plan: user.userInfo.plan
      }
    })
  }
  else {
    res.status(401).json({
      success: false
    })
    // throw new Error('Invalid email or password')
  }
}

module.exports.logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  })
}

module.exports.getUserInfo = (req, res) => {
  const user = req.user
  res.json({
    success: true,
    userInfo: {
      _id: user._id,
      name: user.userInfo.name,
      email: user.accountInfo.email,
      plan: user.userInfo.plan
    }
  })
}

module.exports.updateUserInfo = async (req, res) => {
  const user = req.user
  user.userInfo.plan = req.body.plan
  // user.markModified('plan')
  await user.save()
  res.json({
    success: true,
    userInfo: {
      _id: user._id,
      name: user.userInfo.name,
      email: user.accountInfo.email,
      plan: user.userInfo.plan
    }
  })
}