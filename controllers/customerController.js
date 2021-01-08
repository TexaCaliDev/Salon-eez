const {Customer} = require('../models')

const GetCustomerDetails = async (req,res) => {
    try{
        const customer = await Customer.findByPk(req.params.customer_id)
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
        let stylistId = parseInt(req.params.stylist_id)
        let customerBody = {
            stylistId,
            ...req.body
        }
        const customer = await Customer.create(customerBody)
        res.send(customer)
    }catch(error){
        throw error
    }
} 

const UpdateCustomer = async (req,res) => {
    try{
        let customerId = parseInt(req.params.customer_id)
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
        let customerId = parseInt(req.params.customer_id)
        await Customer.destroy({
            where: {id:customerId}
        })
        res.send({message: `deleted customer with id ${customerId}`})
    }catch(error){
        throw error
    }
} 

module.exports = {
    GetCustomerDetails,
    GetAllCustomers,
    CreateCustomer,
    UpdateCustomer,
    DeleteCustomer
}