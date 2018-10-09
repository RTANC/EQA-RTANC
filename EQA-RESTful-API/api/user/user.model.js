const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    chpasswd: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('User',userSchema)