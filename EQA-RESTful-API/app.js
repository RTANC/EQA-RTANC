const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api')
const app = express()

mongoose.connect('mongodb://localhost/eqa', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connect to mongoDb Success')
    }
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use(api)

app.use((err, req, res, next) => {
    res.status(err.status || 422).send({
        error: {
            message: err.message
        }
    })
})

module.exports = app;
