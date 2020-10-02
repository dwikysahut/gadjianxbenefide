const functionModel = require('../models/function')
const helper = require('../helpers')


module.exports = {

    fibonacci: async function (request, response) {
        try {
            const character = parseInt(request.body.n)
            // console.log(body)
            
            const result = await functionModel.fibonacci(character)
            return response.json({"status Code":200, result:result})


        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    reverse: async function (request, response) {
        try {
            const character = request.body.character
            // console.log(body)
            
            const result = await functionModel.reverse(character)
            return response.json({"status Code":200, result:result})

        } catch (error) {
            console.log(error)
            return response.json({"status Code":500, error:error})

        }

    },
    combination: async function (request, response) {
        try {
            const n = parseInt(request.body.n)
            const r = parseInt(request.body.r)
            const result = await functionModel.combination(n,r)
            return response.json({"status Code":200, result:result})


        } catch (error) {
            console.log(error)
            return response.json({"status Code":500, error:error})

        }

    },
   
}





