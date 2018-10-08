exports.show = (req, res, next) => {
    res.status(200).send({
        message: 'Love U ' + req.params.name
    })
}