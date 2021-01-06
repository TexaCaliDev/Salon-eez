const Router = require('express').Router()
const controller = require('../controllers/equipmentController')

Router.get('/view/:equipment_id', controller.GetEquipmentDetails)
Router.get('/view', controller.GetAllEquipment)
Router.post('/create/:stylist_id', controller.CreateEquipment)
Router.put('/edit/:equipment_id', controller.UpdateEquipment)
Router.delete('/delete/:equipment_id', controller.DeleteEquipment)

module.exports = Router