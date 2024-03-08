const knex = require("../database/knex")
class BooksController{
async createBooks(req,res){
    const book = {author,title,description,numberOfPages,isAvaible:false} = req.body
    await knex("books").insert({author,title,description,numberOfPages,isAvaible})
    return res.status(200).json("Livro cadastrado com sucesso")
    
}
}
module.exports = BooksController