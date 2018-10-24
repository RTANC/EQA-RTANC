const express = require('express')
const router = express.Router()
const {verify} = require('./auth.controller')
router.post('/', verify)

module.exports = router