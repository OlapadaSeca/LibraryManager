const knex = require ("../database/knex")

class UserController {
    async createUser(req,res) {
      const {name,email,telefone,created_at} = req.body
      const user = await knex("users").insert({name,email,telefone,created_at})

     return res.status(200).json("Usuário cadastrado com sucesso")
    }
}
module.exports = UserController