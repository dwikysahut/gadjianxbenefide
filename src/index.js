const express= require('express')
const Route = express.Router()


const employeesRoutes = require('./routes/employees')
Route.use('/api/employees', employeesRoutes)

const functionRoute = require('./routes/function')
Route.use('/api/', functionRoute)

module.exports = Route