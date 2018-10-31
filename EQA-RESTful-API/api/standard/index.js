const express = require('express')
const router = express.Router()
const {list, create, update, remove, listIndicators, createIndicator, updateIndicator, removeIndicator} = require('./standard.controller')

router.get('/', list)

router.get('/:stdid', listIndicators)

router.post('/', create)

router.post('/:stdid', createIndicator)

router.patch('/:stdid', update)

router.patch('/:stdid/:indid', updateIndicator)

router.delete('/:stdid', remove)

router.delete('/:stdid/:indid', removeIndicator)