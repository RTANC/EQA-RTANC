const router = require('express').Router()
const {getUser, createPlan, addUser, delUser} = require('./plan.controller')

router.get('/', getUser)

router.post('/', createPlan)

router.patch('/:planId/:dept/:role', addUser)

router.delete('/:planId/:dept/:role/:userId', delUser)

module.exports = router
