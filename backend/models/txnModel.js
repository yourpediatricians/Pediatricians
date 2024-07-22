const mongoose = require('mongoose')

const txnSchema = mongoose.Schema({
  userId: mongoose.ObjectId,
  amount: Number,
  status: String,
}, { timestamps: true, })

module.exports = mongoose.model('Txn', txnSchema)