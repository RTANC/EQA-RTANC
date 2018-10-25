const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    admin: {
        type: Boolean,
        default: false
    },
    qa: {
        type: Boolean,
        default: false
    },
    chpasswd: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('User',userSchema)