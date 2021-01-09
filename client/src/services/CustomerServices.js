import ApiCLient from "./ApiClient"

export const __GetCustomer = async (customer_id) => {
    try{
        const customer = await ApiCLient.get(`customer/view/${customer_id}`)
        return customer.data
    }catch(error){
        throw error
    }
}

export const __GetAllCustomers = async() => {
    try{
        const customer = await ApiCLient.get(`customer/view`)
        return customer.data
    }catch(error){
        throw error
    }
}

export const __CreateCustomer = async (formData,stylist_id) => {
    try{
        const customer = await ApiCLient.post(`/customer/create/${stylist_id}`,formData)
        return customer.data
    }catch(error){
        throw error
    }
}

export const __UpdateCustomer = async (customer_id) => {
    try{
        const customer = await ApiCLient.put(`/customer/update/${customer_id}`)
        return customer.data
    }catch(error){
        throw error
    }
}

export const __DeleteCustomer = async (customer_id) => {
    try{
        const customer = await ApiCLient.delete(`/customer/delete/${customer_id}`)
        return customer.data
    }catch(error){
        throw error
    }
}