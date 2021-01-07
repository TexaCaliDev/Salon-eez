const Router = require('express').Router()
const controller = require('../controllers/userController')

Router.get('/view/:user_id', controller.GetUserDetails)
Router.get('/view', controller.GetAllUsers)
Router.post('/create', controller.CreateUser)
Router.put('/update/:user_id',controller.UpdateUser)
Router.delete('/delete/:user_id', controller.DeleteUser)

module.exports = Router