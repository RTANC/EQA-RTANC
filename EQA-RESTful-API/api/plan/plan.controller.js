const Plan = require('./plan.model')
exports.getPlan = async (req, res, next) => {
    //Get plan by institute
    try {
        const plan = await Plan.findOne({
            institute: req.query.institute
        }).exec()
        res.status(200).send(plan)
    } catch (error) {
        next(error)
    }
}

exports.createPlan = async (req, res, next) => {
    try {
        await Plan.create({
            institute: req.body.institute
        }).exec()
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.addUser = async (req, res, next) => {
    try {
        const dept = req.params.dept
        const role = dept.concat('.', req.params.role) // Ex. rtanc.writers
        await Plan.update({
            _id: req.params.planId
        }, {
            $push: {
                [role]: req.body
            }
        })
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

exports.delUser = async (req, res, next) => {
    try {
        const dept = req.params.dept
        const role = dept.concat('.', req.params.role) // Ex. rtanc.writers
        await Plan.update({
            _id: req.params.planId
        }, {
            $pull: {
                [role]: req.params.userId
            }
        })
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}
