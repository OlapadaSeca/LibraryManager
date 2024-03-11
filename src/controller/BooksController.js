const knex = require("../database/knex")
class BooksController{
async createBooks(req,res){
    const  {author,title,numberOfPages,isAvaible} = req.body
    const book = await knex("books").insert({author,title,numberOfPages:200,isAvaible:false})
    return res.status(200).json("Livro cadastrado com sucesso")
    
}
async listBooks(req,res){
    const book =  await knex("books")
    return res.status(200).json(book)
}
}
module.exports = BooksController