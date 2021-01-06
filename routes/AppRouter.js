const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StylistRouter = require('./StylistRouter')
const CustomerRouter = require('./CustomerRouter')
const EquipmentRouter = require('./EquipmentRouter')

Router.use('/user', UserRouter)
Router.use('/stylist', StylistRouter)
Router.use('/customer', CustomerRouter)
Router.use('equipment', EquipmentRouter)

module.exports = Router