const express = require('express')
const router = express.Router()

const user = require('./user')
const standard = require('./standard')
const plan = require('./plan')

router.use('/users', user)
router.use('/stands', standard)
router.use('/plans', plan)

module.exports = router