const mongoose = require('mongoose')
const planSchema = mongoose.Schema({
    year: Number,
    owner: String,
    divisions: [{
        _id: mongoose.Schema.Types.ObjectId,
        name: Number,
        depts: [{
            _id: mongoose.Schema.Types.ObjectId,
            name: Number,
            progress: String,
            result: String,
            swot: String,
            persons: [{fullname: String, position: String, role: String}]
        }],
        progress: String,
        result: String,
        swot: String,
        persons: [{fullname: String, position: String, role: String}]
    }],
    progress: String,
    result: String,
    swot: String,
    persons: [{fullname: String, position: String, role: String}]
}) 