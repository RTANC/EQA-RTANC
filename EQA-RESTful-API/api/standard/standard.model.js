const mongoose = require('mongoose')
const standardSchema = mongoose.Schema({
    institute: Number,
    no: String,
    name: String,
    lvl: String,
    indicators: [{
        _id: mongoose.Schema.Types.ObjectId,
        no: String,
        type: String,
        name: String,
        info: String,
        gain: String
    }]
})

module.exports = mongoose.model('Standard', standardSchema)