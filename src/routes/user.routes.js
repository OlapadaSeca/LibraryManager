const {Router} = require ("express")
const UserController = require("../controller/UserController")

const usersRoutes =  Router()

const userController = new UserController

usersRoutes.post("/user", userController.createUser)
usersRoutes.get("/user", userController.listUser)
usersRoutes.patch("/user/:idUsers",userController.updateUser)
usersRoutes.delete("/user/:idUsers",userController.deleteUser)
usersRoutes.get("/user/:idUsers",userController.listUserById)




module.exports = usersRoutes