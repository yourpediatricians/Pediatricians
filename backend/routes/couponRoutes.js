const express = require("express");
const router = express.Router();
const { validateCoupon } = require("../controllers/couponController");

router.post("/check", validateCoupon);

module.exports = router;
