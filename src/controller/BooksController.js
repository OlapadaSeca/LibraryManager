const knex = require("../database/knex")
class BooksController{
async createBooks(req,res){
    const  {author,title,numberOfPages,isAvaible} = req.body
    const book = await knex("books").insert({author,title,numberOfPages,isAvaible:true})
    return res.status(200).json("Livro cadastrado com sucesso")
    
}
async listBooks(req,res){
    const book =  await knex("books")
    return res.status(200).json(book)
}
async listBooksById(req,res){
    const {idBooks} = req.params
    const book = await knex("books").where({idBooks})
    return res.status(200).json(book)
}
async deleteBooks(req,res){
    const{idBooks} = req.params
    await knex("books").where({idBooks}).delete()
    return res.status(200).json("Livro deletado com sucesso")
}
}
module.exports = BooksController