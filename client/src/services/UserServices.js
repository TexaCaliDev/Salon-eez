import ApiClient from './ApiClient'

export const __CheckSession = async()=>{
    try {
      const res = await ApiClient.get('/user/session')
      return res.data
    } catch (error) {
      throw error
    }
  }

export const __l

export const __CreateUser = async (formData) => {
    try{
        const user = await ApiClient.post(`/user/create`, formData)
        return user.data
    }catch(error){
        error
    }
}

export const __GetUser = async (user_id) => {
    try{
        const user = await ApiClient.get(`user/view/${user_id}`)
    }catch(error){
        throw error
    }
}

export const __DeleteUser = async (user_id) => {
    try {
        const user = await ApiClient.delete(`/user/delete/${user_id}`)
        return user.data
    }catch(error){
        throw error
    }
}
 