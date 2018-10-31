const Standard = require('./standard.model')
const mongoose = require('mongoose')

exports.list = async (req, res, next) => {
    try {
        const stands = await Standard.find({institute: req.params.institute, lvl: req.query.lvl}).exec()
        res.status(200).send(stands)
    } catch (error) {
        next(error)
    }
}

exports.create = async (req, res, next) => {
    try {
        await Standard.create(req.body).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {
    try {
        await Standard.update({_id: req.params.stdid}, {
            $set: {
                no: req.body.no,
                name: req.body.name,
                lvl: req.body.lvl
            }
        }).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.remove = async (req, res, next) => {
    try {
        await Standard.remove({_id: req.params.stdid}).exec()
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

exports.listIndicators = async (req, res, next) => {
    try {
        const result = await Standard.findOne({_id: req.params.stdid}).exec()
        const indicators = result.indicators
        res.status(200).send(indicators)
    } catch (error) {
        next(error)
    }
}

exports.createIndicator = async (req, res, next) => {
    try {
        await Standard.update({_id: req.params.stdid}, {
            $push: {
                indicators: {
                    _id: new mongoose.Schema.ObjectId,
                    no: req.body.no,
                    type: req.body.type,
                    name: req.body.name,
                    info: req.body.info,
                    gain: req.body.gain
                }
            }
        }).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.updateIndicator = async (req, res, next) => {
    try {
        await Standard.update({_id: req.params.stdid, 'indicators._id': req.params.indid}, {
            $set: {
                'indicators.$.no': req.body.no,
                'indicators.$.type': req.body.type,
                'indicators.$.name': req.body.name,
                'indicators.$.info': req.body.info,
                'indicators.$.gain': req.body.gain
            }
        })
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.removeIndicator = async (req, res, next) => {
    try {
        await Standard.update({_id: req.params.stdid}, {
            $pull: {
                'indicators._id': req.params.indid
            }
        })
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}