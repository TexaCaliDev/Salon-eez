const Router = require('express').Router()
const controller = require('../controllers/customerController')

Router.get('/view/:customer_id', controller.GetCustomerDetails)
Router.get('/view', controller.GetAllCustomers)
Router.post('/create/:stylist_id', controller.CreateCustomer)
Router.put('/update/:customer_id',controller.UpdateCustomer)
Router.delete('/delete/:customer_id', controller.DeleteCustomer)

module.exports = Router