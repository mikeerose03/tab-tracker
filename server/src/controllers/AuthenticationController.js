const {User} = require('../models')
const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

function signUserJWT (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7

  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      var user = await User.create(req.body)
      var userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: signUserJWT(userJSON)
      })
    } catch (error) {
      res.status(409).send({
        error: 'Email is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      var {email, password} = req.body
      var user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Login Information was incorrect. '
        })
      }

      var isPasswordValid = await user.comparePassword(password)

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Login Information was incorrect. '
        })
      }

      var userJSON = user.toJSON()

      res.send({
        user: userJSON,
        token: signUserJWT(userJSON)
      })
    } catch (error) {
      res.status(500).send({
        error: 'Something went wrong while trying to login.'
      })
    }
  }
}
