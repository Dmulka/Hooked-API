const Router = require('express').Router()

const controller = require('../controllers/reportControllers')

Router.get('/', controller. getReport)
Router.get('/name/:first_name', controller.findByuserName)
Router.get("/:id", controller.getreportById)
Router.post('/', controller.updateReport)
Router.put('/:id', controller.createUser)
Router.delete('/:id', controller.deleteReport)



module.exports = Router

        // getReport,
        // findByuserName,
        // getreportById,
        // updateReport,
        // createUser,
        // deleteReport

