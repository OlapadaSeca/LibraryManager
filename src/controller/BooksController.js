const knex = require("../database/knex")
class BooksController{
async createBooks(req,res){
    const {id_bookAr} = req.params
   
    const  {author,title,numberOfPages,isAvaible} = req.body
    
    const books = {
        author,
        title,
        numberOfPages,
        isAvaible:true,
        id_bookAr
       }
   
       await knex("books").insert({
           author: books.author,
           title: books.title,
           isAvaible: books.isAvaible, 
           id_bookAr: books.id_bookAr
       })
       return res.status(201).json("Livro adicionado com sucesso")
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
async ArmaBooks (req,res){
    const {idBooks} = req.params
    await knex ("books").where({idBooks}).insert("idArmaBooks")
}
}
module.exports = BooksController

