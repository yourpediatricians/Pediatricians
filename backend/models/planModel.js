const mongoose = require('mongoose')

const planSchema = mongoose.Schema({
  planId: String,
  amount: Number,
  validity: Number,
}, { timestamps: true, })

module.exports = mongoose.model('Plan', planSchema)