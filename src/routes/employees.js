const express = require('express')
const Route = express.Router()

const employeesController = require('../controllers/employees')



Route
    .get('/',  employeesController.getEmployees)
    .get('/:id',  employeesController.getEmployeeById) 
    .post('/',  employeesController.postEmployee) 
    .put('/:id',  employeesController.putEmployee) 
    .delete('/:id',  employeesController.deleteEmployee) 
    
module.exports = Route