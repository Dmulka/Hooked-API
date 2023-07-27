const Router = require('express').Router()

const controller = require('../controllers/reportControllers')

Router.get('/', controller. getReport)
Router.get('/getReportByUser/:userId', controller.getReportByUser)
Router.get("/:id", controller.getreportById)
Router.put('/:id', controller.updateReport)
Router.post('/', controller.createReport)
Router.delete('/:id', controller.deleteReport)



module.exports = Router

     

