const express = require('express')
const router = express.Router()
const {show} = require('./user.controller')
router.get('/', show)

router.get('/:name', show)

module.exports = router