import ApiClient from './ApiClient'

export const __GetAllEquipment = async () => {
    try{
        const equip = await ApiClient.get(`/equipment/view`)
        return equip.data
    }catch(error){
        throw error
    }
}

export const __GetEquipmentDetails = async (equipment_id) => {
    try{
        const equip = await ApiClient.get(`/equipment/view/${equipment_id}`)
        return equip.data
    }catch(error){
        throw error
    }
}

export const __CreateEquipment = async (formData,stylist_id) => {
    try{
        const equip = await ApiClient.get(`/equipment/create/${stylist_id}`,formData)
        return equip.data
    }catch(error){
        throw error
    }
}

export const __UpdateEquipment = async (equipment_id) => {
    try{
        const equip = await ApiClient.put(`/equipment/edit/${equipment_id}`)
        return equip.data
    }catch(error){
        throw error
    }
}

export const __DeleteEquipment = (equipment_id) => {
    try{
        const equip = await ApiClient.delete(`/equipment/delete/${equipment_id}`)
        return equip.data
    }catch(error){
        throw error

    }
}