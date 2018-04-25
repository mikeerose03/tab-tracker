const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const error = Joi.validate(req.body, schema)

    if (error.error) {
      switch(error.error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: "You must provide a valid email."
          })
          break
        case 'password':
          res.status(400).send({
            error: "You must provide a valid password."
          })
          break
        default:
          res.status(400).send({
            error: "Invalid registration information."
          })
      }
      res.status(400).send({
        error: "Invalid registration information."
      })
    } else {
      next()
    }
  }
}
