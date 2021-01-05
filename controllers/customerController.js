const {Customer} = require('../models')

const GetCustomerDetails = async (req,res) => {
    try{
        const customer = await Customer.findByPk(req.params.customer_id)
        res.send(customer)
    }catch(error){
        throw error
    }
} 

const GetCustomer = async (req,res) => {
    try{
        let customerId = parseInt(req.params.customer_id)
        const customer = await Customer.findAll({
            where:{id: customerId}
        }) 
        res.send(customer)
    }catch(error){
        throw error
    }
} 

const GetAllCustomers = async (req,res) => {
    try{
        const customer = await Customer.findAll()
        res.send(customer) 
    }catch(error){
        throw error
    }
} 

const CreateCustomer = async (req,res) => {
    try{
        let customerBody = {...req.body}
        const customer = await Customer.create(customerBody)
        res.send(customer)
    }catch(error){
        throw error
    }
} 

const UpdateCustomer = async (req,res) => {
    try{
        let customerId = parseInt(req.params.stylist_id)
        let updatedCustomer = await Customer.update(req.body,{
            where: {id: customerId},
            returning: true
        })
        res.send(updatedCustomer)
    }catch(error){
        throw error
    }
} 

const DeleteCustomer = async (req,res) => {
    try{
        let customerId = parseInt(req.params.stylist_id)
        let updatedCustomer = await Customer.destroy()
    }catch(error){
        throw error
    }
} 

module.exports = {
    GetCustomerDetails,
    GetAllCustomers,
    GetCustomer,
    CreateCustomer,
    UpdateCustomer,
    DeleteCustomer
}