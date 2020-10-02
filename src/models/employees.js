const connection = require('../config/mysqlConn')

module.exports = {
    getEmployees: function() {
        return new Promise(function(resolve,reject){
            connection.query('SELECT * from employees',function (error,result) {
                if(!error){
                    resolve(result)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    getEmployeeById: function(id) {
        return new Promise(function(resolve,reject){
            connection.query(`SELECT * from employees WHERE id=${id}`,function (error,result) {
                if(!error){
                    resolve(result)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    postEmployee: function(body) {
        return new Promise(function(resolve,reject){
            connection.query('INSERT INTO employees SET ?', body, function(error, result) {
                if(!error){
                    const newData = {
                        id: result.insertId,
                        ...body ,
                    }
                    resolve(newData)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    putEmployee: function(id,body) {
        return new Promise(function(resolve,reject){
            connection.query('UPDATE employees SET ? WHERE id = ?', [body, id], function(error, result) {
                if(!error){
                    const newData = {
                        id: parseInt(id),
                        ...body ,
                        
                    }
                    resolve(newData)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    deleteEmployee: function(id) {
        return new Promise(function(resolve,reject){
            connection.query('DELETE from employees WHERE id = ?',id, function(error, result) {
                if(!error){
                    const newData = {
                        id: parseInt(id),
                        ...result
                        
                    }
                    resolve(newData)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
}