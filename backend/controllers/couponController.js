const Coupon = require("../models/couponModel")

module.exports.validateCoupon = async (req, res) => {
  const coupon = req.body.coupon
  const exists = await this.validate(coupon)
  if (exists)
    return res.json({
      success: true
    })
  else
    return res.json({
      success: false
    })
}

module.exports.validate = async (coupon) => {
  return await Coupon.findOne({ couponId: coupon })
}