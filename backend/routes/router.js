const express = require('express')
const router = express.Router()
const reg = require('../controllers/register')
const log = require ('../controllers/login')



router.post('/register',reg.register)
router.post('/login',log.login)

module.exports = router
