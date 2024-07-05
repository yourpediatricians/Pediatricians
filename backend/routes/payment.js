const express = require("express");
const { pay, abcd, check } = require("../controllers/payment");
const router = express.Router();

router.get("/phonepe", abcd);
router.post("/status/:txnId", check);

module.exports = router;
