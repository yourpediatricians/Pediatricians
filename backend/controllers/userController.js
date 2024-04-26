const User = require('../models/userModel')

const generateToken = require('../utils/generateToken')
const { createAccountFromGoogle } = require('../utils/accounts')

module.exports.registerUser = async (req, res) => {
  const { name, phone, email, password } = req.body

  const userExists = await User.findOne({ 'accountInfo.email': email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
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
    generateToken(res, newUser._id)
    res.status(201).json({
      success: true,
      userInfo: {
        _id: newUser._id,
        name: newUser.userInfo.name,
        email: newUser.accountInfo.email,
        plan: newUser.userInfo.plan
      }
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
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

  if (user && user.accountInfo.accountType === 'local' && (await user.matchPassword(password))) {
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