const Router = require('express').Router()
const controller = require('../controllers/stylistController')

Router.get('/view/:stylist_id', controller.GetStylistDetails)
Router.post('/create/:stylist_id,', controller.CreateStylist)
Router.put('/:stylist_id',controller.UpdateStylist)
Router.delete('/delete/:stylist_id', controller.DeleteStylist)

module.exports = Router