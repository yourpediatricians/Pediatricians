const express = require('express')

const { registerUser, loginUser, loginGoogle, logoutUser, getUserInfo, updateUserInfo, verifyUser } = require('../controllers/userController')
const { initUser, googleAuthProtect } = require('../middlewares/authProtect')

const router = express.Router()

router.route('/register')
  .post(registerUser)

router.route('/verify')
  .post(verifyUser)

router.route('/auth')
  .post(loginUser)

router.route('/auth/google')
  .post(googleAuthProtect, loginGoogle)

router.route('/logout')
  .post(logoutUser)

router.route('/info')
  .get(getUserInfo)
  .put(updateUserInfo)

module.exports = router