const { Equipment } = require('../models')

const GetEquipmentDetails = async (req,res) => {
    try{
        const equipment = await Equipment.findByPk(req.params.equipment_id)
        res.send(equipment)
    }catch(errror){
        throw error
    }
}

const GetEquipment = async (req,res) => {
    try{
        let equipmentId = parseInt(req.params.equipment_id)
        const equipment = await Equipment.findAll({
            where: {id: equipmentId}
        })
        res.send(equipment)
    }catch(error){
        throw error
    }
}

const GetAllEquipment = async (req,res) => {
    try{
        const equip = await Equipment.findAll()
        res.send(equip)
    }catch(error){
        throw error
    }
}

const CreateEquipment = async (req,res) => {
    try{
        let stylistId = parseInt(req.params.stylist_id)
        equipmentBody = {
            stylistId,
            ...req.body
        }
        const equipment = await Equipment.create(equipmentBody)
        res.send(equipment)
    }catch(error){
        throw error
    }
}

const UpdateEquipment = async (req,res) => {
    try{
        let equipId = parseInt(req.params.equipment_id)
        let updateEquip = await Equipment.update(...req.body,{
            where: {id: equipId},
            returning: true
        })
        res.send(updateEquip)
    }catch(error){
        throw error
    }
}

const DeleteEquipment = async (req,res) => {
    try{
        let equipId = parseInt(req.params.equipment_id)
        let Equip = await Equipment.destroy({
            where: {id: equipId}
        })
        res.send(updateEquip)
    }catch(error){
        throw error
    }
}

module.exports = {
    GetEquipmentDetails,
    GetAllEquipment,
    GetEquipment,
    CreateEquipment,
    UpdateEquipment,
    DeleteEquipment
}