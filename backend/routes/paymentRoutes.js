const express = require("express");
const router = express.Router();
const { initPayment, allTransactions } = require("../controllers/paymentController");

router.post("/pay", initPayment);

router.get("/status/all", allTransactions)

// router.get("/status/:txnId", checkStatus);

// router.post('/status', checkStatus)

module.exports = router;
