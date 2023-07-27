const Router = require('express').Router()



const controller = require('../controllers/speciesControllers')

Router.get('/', controller.getSpecies)
Router.get('/:name', controller.findSpeciesByName)
Router.get('/:id', controller. getSpeciestById)
Router.post('/', controller.createSpecies)
Router.put('/:id', controller.updateSpecies)
Router.delete('/:id', controller.deleteSpecies)



module.exports = Router
 
