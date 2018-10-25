const mongoose = require('mongoose')
const planSchema = mongoose.Schema({
    year: {
        type: Number,
        default: () => {
            return new Date().getFullYear() + 543
        }
    },
    institute: {
        type: Number
    },
    rtanc: { //วพบ.
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    director: { //กอ.
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    academic: { //กศ.
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    student: { //กปค.
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    med: { //ภาคอายุรศัลย์
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    funda: { //ภาคเบื้องต้น
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    gen: { //ภาคพิ้นฐาน
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    obs: { //ภาคสูติ
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    pred: { //ภาคกุมาร
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    psyc: { //ภาคจิต
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    heal: { //ภาคอนามัย
        writers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        checkers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    }
})

module.exports = mongoose.model('Plan', planSchema)