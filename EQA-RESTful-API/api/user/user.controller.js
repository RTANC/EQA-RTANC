const jwt = require('jsonwebtoken')
const User = require('./user.model')

function generateToken(usr) {
    return jwt.sign(usr,  process.env.JWT_KEY, {
            expiresIn: '1d'
        })
}

exports.list = async (req, res, next) => {
    try {
        const users = await User.find().exec()
        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
}

exports.auth = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username}).exec()
        if (user.password === req.body.password) {
            //Success
            //get permission from plan
        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        next()
    }
}

exports.create = async (req, res, next) => {
    try {
        await User.insertMany(req.body.users).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.reset = async (req, res, next) => {
    try {
        await User.update({_id: req.params.uid}, {
            $set: {
                password: req.body.password,
                chpasswd: false
            }
        }).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.chpasswd =  async (req, res, next) => {
    try {
        await User.update({_id: req.params.uid}, {
            $set: {
                password: req.body.password
            }
        }).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.chname = async (req, res, next) => {
    try {
        await User.update({_id: req.params.uid}, {
            $set: {
                fullname: req.body.fullname
            }
        }).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.remove = async (req, res, next) => {
    try {
        await User.remove({_id: req.params.uid}).exec()
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}