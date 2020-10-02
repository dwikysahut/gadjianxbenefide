const express = require('express')
const Route = express.Router()

const functionController = require('../controllers/function')



Route
    .post('/reverse',  functionController.reverse)
    .post('/fibonacci',  functionController.fibonacci) 
    .post('/combination',  functionController.combination) 
     
    
module.exports = Route