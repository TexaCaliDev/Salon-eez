const {Stylist} = require('../models')

const GetStylistDetails = async (req,res) => {
    try{
        const stylist = await Stylist.findByPk(req.params.user_id)
        res.send(stylist)
    }catch(error){
        throw error
    }
}

const GetStylist = async (req,res) => {
    try{
        let stylistId = parseInt(req.params.stylist_id)
        const stylist = await Stylist.findAll({
            where:{id:stylistId},
            returning: true
        })
        res.send(stylist)
    }catch(error){
        throw error
    }
}

const GetAllStylists = async (req,res) => {
    try{
        const stylist = await Stylist.findAll()
        res.send(stylist)
    }catch(error){
        throw error
    }
}

const CreateStylist = async (req,res) => {
    try{
        const stylist = await Stylist.create(req.body)
        res.send(stylist)
    }catch(error){
        throw error
    }
}

const UpdateStylist = async (req,res) => {
    try{
        let stylistId = parseInt(req.params.stylist_id)
        let updatedStylist = await Stylist.update(req.body,{
            where: { id: stylistId},
            returning: true
        })
        res.send(updatedStylist)
    }catch(error){
        throw error
    }
}

const DeleteStylist = async (req,res) => {
    try{
        const stylistId = parseInt(req.params.stylist_id)
        await Stylist.destroy({
            where: {
                id: req.params.stylist_id
            },
            returning: true
        })
        res.send({message: `deleted stylist with id ${stylistId}`})
    }catch(error){
        throw error
    }
}

module.exports = {
    GetStylistDetails,
    GetAllStylists,
    GetStylist,
    CreateStylist,
    UpdateStylist,
    DeleteStylist
}