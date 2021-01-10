const { hashPassword, passwordValid, createToken } = require('../middleware/Auth')
const { User } = require('../models')

const Register = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body
        const password_digest = await hashPassword(password) // Creating a hashed password
        const user = await User.create({ name, email, password_digest }) // Store the hashed password in the database
        res.send(user)
    } catch (error) {
        throw error
    }
}

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (user &&  passwordValid(req.body.password, user.password_digest)) {
            let payload = {
                id: user.id,
                name: user.name
            }
            let token = createToken(payload)
            return res.send({ user, token })
        }
    } catch (error) {
        throw error
    }
}

const SessionStatus = async (req, res) => {
    try {
      const { token } = res.locals
      const user = await User.findByPk(token.id, {
        attributes: ['id', 'name', 'email'] // Find a user by the id encoded in the json web token, only include the id, name and email fields
      })
      res.send({ user, status: 'OK' })
    } catch (error) {
      throw error
    }
  }

  module.exports = {
      Register,
      Login,
      SessionStatus
  }