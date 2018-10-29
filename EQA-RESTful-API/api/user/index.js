const express = require('express')
const router = express.Router()
const {list, permission, auth, create, reset, chpasswd, chname, remove} = require('./user.controller')

router.get('/', list)

router.get('/:uid/permission', permission)

router.post('/auth', auth)

router.post('/', create)

router.patch('/:uid/reset', reset)

router.patch('/:uid/chpasswd', chpasswd)

router.patch('/:uid/chname', chname)

router.delete('/:uid/remove', remove)

module.exports = router