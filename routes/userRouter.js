const Router = require('express').Router()

const controller = require('../controllers/userControllers')

Router.get('/', controller. getUser)
Router.get('/:name', controller.findByName)
Router.get('/:id', controller.getUserById)
Router.put('/:id', controller.updateUser)
Router.post('/', controller.createUser)
Router.delete('/:id', controller.deleteUser)



module.exports = Router