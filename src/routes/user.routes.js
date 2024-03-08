const {Router} = require ("express")
const UserController = require("../controller/UserController")

const usersRoutes =  Router()

const userController = new UserController

usersRoutes.post("/user", userController.createUser)
usersRoutes.get("/user", userController.listUser)


module.exports = usersRoutes