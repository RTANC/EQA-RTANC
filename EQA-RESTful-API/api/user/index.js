const express = require('express')
const router = express.Router()
const {list} = require('./user.controller')
router.get('/', list)


module.exports = router