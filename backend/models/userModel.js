const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  isVerified: {
    type: Boolean,
    default: false
  },
  accountInfo: {
    accountType: String,
    email: String,
    password: String,
    googleId: String
  },
  userInfo: {
    name: String,
    phone: String,
    address: String,
    plan: String
  }
}, { timestamps: true, })

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.accountInfo.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('accountInfo.password')) {
    next()
  }
  if (this.accountInfo.accountType === 'local') {
    const salt = await bcrypt.genSalt(10)
    this.accountInfo.password = await bcrypt.hash(this.accountInfo.password, salt)
  }
  next()
})

module.exports = mongoose.model('User', userSchema)