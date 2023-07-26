const Router = require('express').Router()

const controller = require('../controllers/userControllers')

Router.get('/', controller. getUser)
Router.get('/name/:first_name', controller.findByName)
Router.get("/:id", controller.getUserById)
Router.post('/', controller.updateUser)
Router.put('/:id', controller.createUser)
Router.delete('/:id', controller.deleteUser)



module.exports = Router