const employeesModel = require('../models/employees')
const helper = require('../helpers')


module.exports = {

    getEmployees: async function (request, response) {
        try {
            const result = await employeesModel.getEmployees()
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    getEmployeeById: async function (request, response) {
        try {
            const id = request.params.id
            const result = await employeesModel.getEmployeeById(id)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
    postEmployee: async function (request, response) {
        try {
            const body = request.body
            const result = await employeesModel.postEmployee(body)
            return helper.response(response, 201, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
    putEmployee: async function (request, response) {
        try {
            const body = request.body
            const id = request.params.id
            const result = await employeesModel.putEmployee(id,body)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
    deleteEmployee: async function (request, response) {
        try {
            const id = request.params.id
          
            const result = await employeesModel.deleteEmployee(id)
            if(result.affectedRows>0){
                return helper.response(response, 200, result)
            }
           
            return response.json({"Status code":204})

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
   
}
