const {Router} = require ("express")
const UserController = require("../controller/BooksController")
const usersRoutes = require("./user.routes")

const bookRoutes =  Router()

const booksController = new UserController

bookRoutes.post("/books", booksController.createBooks)
bookRoutes.get("/books", booksController.listBooks)
bookRoutes.get("/books/:idBooks", booksController.listBooksById)
module.exports = bookRoutes