const User = require('../models/userModel')

const generateToken = require('../utils/generateToken')

module.exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const newUser = await User.create({ name, email, password })

  if (newUser) {
    generateToken(res, newUser._id)
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email
    })
  } else {
    res.status(400)
    throw new Error ('Invalid user data')
  }
}

module.exports.loginUser = async(req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  }
  else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
}

module.exports.logoutUser = (req, res) => {
  
}