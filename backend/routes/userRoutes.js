const express = require('express')

const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/userController')
const {authProtect} = require('../middlewares/authProtect')

const router = express.Router()

router.route('/')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/logout')
  .post(logoutUser)

router.route('/profile')
  .get(authProtect, getUserProfile)
  .put()

module.exports = router