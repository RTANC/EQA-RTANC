const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    role: {
        admin: {
            type: Boolean,
            default: true
        },
        qa: {
            type: Boolean,
            default: true
        },
        writer: {
        },
        checker: {
        }
    },
    chpasswd: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('User',userSchema)