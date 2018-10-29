const jwt = require('jsonwebtoken')
const User = require('./user.model')
const Plan = require('../plan/plan.model')

function generateToken(usr) {
    return jwt.sign(usr,  process.env.JWT_KEY, {
            expiresIn: '1d'
        })
}

function findPermission(arr, name) {
    return arr.findIndex(v => {
        return v == name
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

exports.permission = async (req, res, next) => {
    try {
        const plan = await Plan.findOne({year: new Date().getFullYear() + 543, institute: req.query.institute}).exec()
        const permission = {
            rtanc: {
                write: findPermission(plan.rtanc.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.rtanc.checkers, req.params.uid) == -1 ? false : true
            },
            director: {
                write: findPermission(plan.director.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.director.checkers, req.params.uid) == -1 ? false : true
            },
            academic: {
                write: findPermission(plan.academic.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.academic.checkers, req.params.uid) == -1 ? false : true
            },
            student: {
                write: findPermission(plan.student.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.student.checkers, req.params.uid) == -1 ? false : true
            },
            med: { //ภาคอายุรศัลย์
                write: findPermission(plan.med.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.med.checkers, req.params.uid) == -1 ? false : true
            },
            funda: { //ภาคเบื้องต้น
                write: findPermission(plan.funda.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.funda.checkers, req.params.uid) == -1 ? false : true
            },
            gen: { //ภาคพิ้นฐาน
                write: findPermission(plan.gen.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.gen.checkers, req.params.uid) == -1 ? false : true
            },
            obs: { //ภาคสูติ
                write: findPermission(plan.obs.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.obs.checkers, req.params.uid) == -1 ? false : true
            },
            pred: { //ภาคกุมาร
                write: findPermission(plan.pred.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.pred.checkers, req.params.uid) == -1 ? false : true
            },
            psyc: { //ภาคจิต
                write: findPermission(plan.psyc.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.psyc.checkers, req.params.uid) == -1 ? false : true
            },
            heal: { //ภาคอนามัย
                write: findPermission(plan.heal.writers, req.params.uid) == -1 ? false : true,
                check: findPermission(plan.heal.checkers, req.params.uid) == -1 ? false : true
            }
        }
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
            res.status(200).send({
                user: user,
                token: generateToken(user)
            })
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