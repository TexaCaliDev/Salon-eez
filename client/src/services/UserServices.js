import ApiClient from './ApiClient'

export const __CheckSession = async()=>{
    try {
      const session = await ApiClient.get('/user/session')
      return session.data
    } catch (error) {
      throw error
    }
  }

export const __LoginUser = async (userData) => {
    try{
      const user = await ApiClient.post('/user/login',userData)
      localStorage.setItem('token',user.data.token)
      return user.data
    }catch(error){
        throw error
    }
}

export const __CreateUser = async (formData) => {
    try{
        const user = await ApiClient.post(`/user/create`, formData)
        return user.data
    }catch(error){
        throw error
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
 