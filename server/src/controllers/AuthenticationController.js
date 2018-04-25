const {Users} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      var user = await Users.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(409).send({
        error: 'Email is already in use.'
      })
    }
  }
}
