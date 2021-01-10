import ApiClient from './ApiClient'

export const __GetStylist = async (stylist_id) => {
    try{
        const stylist = await ApiClient.get(`stylist/view/${stylist_id}`)
        return stylist.data
    }catch(error){
        throw error
    }
}

export const __GetAllStylists = async () => {
    try{
        const stylist = await ApiClient.get(`stylist/view`)
    }catch(error){
        throw error
    }
}

export const __GetStylistCustomers = async (stylist_id) => {
    try{
        const stylist = await ApiClient.get(`/stylist/clients/${stylist_id}`)
        return stylist.data
    }catch(error){
        throw error
    }
}

export const __GetSylistTool = async (stylist_id) => {
    try{
        const stylist = await ApiClient.get(`stylist/tools/${stylist_id}`)
        return stylist.data
    }catch(error){
        throw error
    }
}

export const __CreateStylist = async (formData) => {
    try{
        const stylist = await ApiClient.post(`/stylist/create`,formData)
        return stylist.data
    }catch(error){
        throw error
    }
}

export const __UpdateStylist = async (formData,stylist_id) => {
    try{
        const stylist = await ApiClient.put(`stylist/update/${stylist_id}`,formData)
        return stylist.data
    }catch(error){
        throw error
    }
}

export const __DeleteStylist = async (stylist_id) => {
    try{
        const stylist = await ApiClient.delete(`stylist/delete/${stylist_id}`)
        return stylist.data 
    }catch(error){
        throw error
    }
}