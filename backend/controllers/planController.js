const Plan = require("../models/planModel")

module.exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({})
    if (plans.length > 0) {
      return res.json({
        success: true,
        plans: plans
      })
    }
  } catch(e) {}
  return res.json({
    success: false,
    msg: 'something went wrong'
  })
}