const crypto = require("crypto")
const axios = require("axios")
const CryptoJS = require("crypto-js")
const cron = require("node-cron")

const User = require('../models/userModel')
const Txn = require('../models/txnModel')
const Plan = require('../models/planModel')

const generateTxnId = async (user, amount) => {
  const newTxn = await Txn.create({
    userId: user._id,
    amount: amount
  })
  return newTxn._id
}

const verifyPlan = async (plan) => {
  return await Plan.findById(plan._id)
}

module.exports.initPayment = async (req, res) => {

  const user = req.user
  const plan = await verifyPlan(req.body.plan)

  const txnId = (await generateTxnId(user, plan.amount)).toString()

  user.txns.push(txnId)
  await user.save()

  const data = {
    merchantId: process.env.MERCHANT_ID,
    merchantTransactionId: txnId,
    merchantUserId: user._id.toString(),
    amount: plan.amount * 100,
    redirectUrl: `${process.env.REDIRECT_URL}/all`,
    redirectMode: "REDIRECT",
    callbackUrl: process.env.CALLBACK_URL,
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const payload = JSON.stringify(data);
  const payloadMain = Buffer.from(payload).toString("base64");

  // const key = "78b8b52d-8bcc-4422-9f55-ac3460826c8b";
  const key = process.env.PHONEPE_SALT;
  const keyIndex = process.env.PHONEPE_SALT_INDEX;
  const string = payloadMain + "/pg/v1/pay" + key;

  const sha256 = CryptoJS.SHA256(string).toString();
  const checksum = sha256 + "###" + keyIndex;

  //create request data
  const options = {
    method: 'post',
    url: `${process.env.PHONEPE_API_URL}/pg/v1/pay`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      "X-VERIFY": checksum,
    },
    data: {
      request: payloadMain,
    }
  };

  //request and get the redirect url in response
  var response
  try {
    const res = await axios.request(options)
    response = res.data
  } catch (err) {
    // console.log(err)
    return res.json({
      success: false,
      code: err.code,
      msg: err.message
    })
  }

  paymentStatusChecker(txnId)

  return res.json({
    success: true,
    url: response.data.instrumentResponse.redirectInfo.url
  })
}

const paymentStatusChecker = async (txnId) => {
  var isDone = false
  const cronJob = cron.schedule('30 * * * * *', async () => {
    try {
      if (isDone)
        return
      const data = await checkStatus(txnId)
      if (data) {
        const txn = await Txn.findById(txnId)
        const user = await User.findById(txn.userId)
        if (data.code === 'PAYMENT_SUCCESS') {
          var expDate = new Date()
          expDate.setDate(expDate.getDate() + 30)

          txn.status = 'success'
          user.userInfo.subscription.active = true
          user.userInfo.subscription.plan = 'Monthly'
          user.userInfo.subscription.expiry = expDate

          await txn.save()
          await user.save()
          isDone = true
        } else if (['PAYMENT_ERROR', 'TRANSACTION_NOT_FOUND', 'PAYMENT_DECLINED', 'TIMED_OUT'].includes(data.code)) {
          txn.status = 'failed'
          await txn.save()
          isDone = true
        }
      }
    } catch (e) {
      console.log('Error while checking payment status.')
    }
  })

  setTimeout(() => {
    cronJob.stop()
  }, 900000)
}

// module.exports.checkStatus = async (req, res) => {
//   // console.log("Checking===========");
//   const merchantTransactionId = req.params.txnId;
//   const merchantUserId = process.env.MERCHANT_ID; // Update with your merchant ID
//   const key = process.env.PHONEPE_SALT; // Update with your API key
//   const keyIndex = process.env.PHONEPE_SALT_INDEX;

//   const txn = await Txn.findById(merchantTransactionId)

//   const string =
//     `/pg/v1/status/${merchantUserId}/${merchantTransactionId}` + key;
//   const sha256 = CryptoJS.SHA256(string).toString();
//   const checksum = sha256 + "###" + keyIndex;

//   const URL = `${process.env.PHONEPE_API_URL}/pg/v1/status/${merchantUserId}/${merchantTransactionId}`;

//   const options = {
//     method: "GET",
//     url: URL,
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//       "X-VERIFY": checksum,
//       "X-MERCHANT-ID": merchantUserId,
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     // console.log(response.data)
//     txn.status = response.data.code
//     await txn.save()

//     if (response.data.code === "PAYMENT_SUCCESS") {
//       return res.json({
//         success: true,
//       })
//     } else {
//       return res.json({
//         success: false
//       })
//     }
//   } catch (error) {
//     return res.json({
//       success: false
//     })
//   }
// }

const checkStatus = async (merchantTransactionId) => {
  // console.log("Checking===========");
  const merchantUserId = process.env.MERCHANT_ID; // Update with your merchant ID
  const key = process.env.PHONEPE_SALT; // Update with your API key
  const keyIndex = process.env.PHONEPE_SALT_INDEX;

  const string = `/pg/v1/status/${merchantUserId}/${merchantTransactionId}` + key;
  const sha256 = CryptoJS.SHA256(string).toString();
  const checksum = sha256 + "###" + keyIndex;

  const URL = `${process.env.PHONEPE_API_URL}/pg/v1/status/${merchantUserId}/${merchantTransactionId}`;

  const options = {
    method: "GET",
    url: URL,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": merchantUserId,
    },
  };

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

module.exports.allTransactions = async (req, res) => {
  const { txns } = req.user

  if (txns.length > 0) {
    const txnStatus = await Promise.all(txns.map(async (txn) => {
      const txnInfo = await checkStatus(txn)
      if (txnInfo) {
        return {
          code: txnInfo.code,
          txnId: txnInfo.data.transactionId,
          amount: txnInfo.data.amount,
          state: txnInfo.data.state,
        }
      }
    }))

    return res.json({
      success: true,
      txns: txnStatus
    })
  }
  else {
    return res.json({
      success: false
    })
  }
}