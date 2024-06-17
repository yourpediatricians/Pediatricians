const User = require('../models/userModel')

module.exports.createAccountFromGoogle = async (email, name, sub) => {
  const userInfo = {
    isVerified: true,
    accountInfo: {
      accountType: 'google',
      email: email,
      googleId: sub
    },
    userInfo: {
      name: name
    }
  }
  const newUser = await User.create(userInfo)

  return newUser
}