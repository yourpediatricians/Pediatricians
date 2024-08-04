const mongoose = require('mongoose')

const couponSchema = mongoose.Schema({
  couponId: String,
  discount: Number
}, { timestamps: true, })

module.exports = mongoose.model('Coupon', couponSchema)