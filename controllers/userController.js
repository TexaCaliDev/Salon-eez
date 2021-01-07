const { User } = require('../models')

const GetUserDetails = async (req,res) => {
    try{
        const user = await User.findByPk(req.params.user_id)
        res.send(user)
        console.log(user)
    }catch(error){
        throw error
    }
}

const GetAllUsers = async (req,res) => {
    try{
        const user = await User.findAll()
        res.send(user)
    }catch(error){
        throw error
    }
}

const CreateUser = async (req, res) => {
    try {
      const userBody= await User.create(req.body)
      res.send(userBody)
    } catch (error) {
      throw error
    }
  }

const UpdateUser = async (req,res) => {
    try{
        let userId = parseInt(req.params.user_id)
        let updatedUser = await User.update(req.body,{
            where: { id: userId},
            returning: true
        })
        res.send(updatedUser)
    }catch(error){
        throw error
    }
}

const DeleteUser = async (req,res) => {
    try{
        let userId = parseInt(req.params.user_id)
        await User.destroy({where: {id: userId}})
        res.send({message: `Deleted account with an I.D. of ${userId}`})
    }catch(error){
        throw error 
    }
}

module.exports = {
    GetUserDetails,
    GetAllUsers,
    CreateUser,
    UpdateUser,
    DeleteUser
}