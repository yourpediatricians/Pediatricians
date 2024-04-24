const express = require('express')

const { registerUser, loginUser, logoutUser, getUserInfo, updateUserInfo } = require('../controllers/userController')
const {authProtect} = require('../middlewares/authProtect')

const router = express.Router()

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/logout')
  .post(logoutUser)

router.route('/info')
  .get(authProtect, getUserInfo)
  .put(authProtect, updateUserInfo)

module.exports = router