const Router = require('express').Router()
const controller = require('../controllers/stylistController')

Router.get('/view/:stylist_id', controller.GetStylist)
Router.get('/view', controller.GetAllStylists)
Router.get('/clients/:stylist_id', controller.GetStylistCustomers)
Router.get('/tools/:stylist_id', controller.GetStylistEquipment)
Router.post('/create', controller.CreateStylist)
Router.put('/update/:stylist_id',controller.UpdateStylist)
Router.delete('/delete/:stylist_id', controller.DeleteStylist)

module.exports = Router