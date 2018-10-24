const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
exports.verify = async (req, res, next) => {
    const token = req.headers.authorization
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
    })
    const payload = ticket.getPayload()
    console.log(payload)
    const userid = payload['sub']
    res.status(200).send(userid)
}