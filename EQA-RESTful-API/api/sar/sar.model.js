const mongoose = require('mongoose')

const sarSchema = mongoose.Schema({
    planId: { type: mongoose.Schema.Types.ObjectId },
    indicatorId: { type: mongoose.Schema.Types.ObjectId },
    progress: String,
    result: String,
    swot: String
})

module.exports = mongoose.model('Plan',sarSchema)