const Router = require('express').Router()



const controller = require('../controllers/speciesControllers')

Router.get('/', controller.getSpecies)
Router.get('/name', controller.findSpeciesByName)
Router.put('/:id', controller.createSpecies)
Router.post('/', controller.updateSpecies)
Router.delete('/:id', controller.deleteSpecies)



module.exports = Router
 
