const knex = require ("../database/knex")

class UserController {
    async createUser(req,res) {
      const {name,email,telefone,created_at} = req.body
      const user = await knex("users").insert({name,email,telefone,created_at})

     return res.status(200).json("Usuário cadastrado com sucesso")
    }
    async listUser (req,res){
      const user =  await knex("users")
      return res.status(200).json(user)
    }
    async deleteUser(req,res){
      const {user_id} = req.params
      await knex("users").where({id:user_id}).delete()
      return res.status(200).json("Usuario deletado da existencia")

    }
}
module.exports = UserController