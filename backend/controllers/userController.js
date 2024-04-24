const User = require('../models/userModel')

const generateToken = require('../utils/generateToken')

module.exports.registerUser = async (req, res) => {
  const { name, phone, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const newUser = await User.create({ name, phone, email, password })

  if (newUser) {
    generateToken(res, newUser._id)
    res.status(201).json({
      success: true,
      userInfo: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        plan: newUser.plan
      }
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.json({
      success: true,
      userInfo: {
        _id: user._id,
        name: user.name,
        email: user.email,
        plan: user.plan
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
  res.json({
    profile: 'sss'
  })
}

module.exports.updateUserInfo = async (req, res) => {
  const user = req.user
  const {plan} = req.body
  user.plan = plan
  await user.save()
  res.json({
    success: true,
  })
}