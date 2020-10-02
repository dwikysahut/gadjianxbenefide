let f = [];
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}
module.exports = {
    fibonacci: function (n) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const result = [0, 1];
                for (let i = 2; i <= n; i++) {
                    result.push(result[i - 2] + result[i - 1]);
                }
                resolve(result.join(' '));


            }, 1500)

        })
    },
    reverse: function (char) {
        return new Promise(function (resolve, reject) {
            let i = char.length - 1
            let result = "";
            setTimeout(() => {
                if (char === "") {
                    err = 'Character cannot empty';
                    return reject(err);
                }
                for (let j = 0; j < char.length; j++) {
                    result += char[i]
                    i--;
                }
                resolve(result);
            }, 1000)
        })

    },
    combination: function (n, r) {
        return new Promise(function (resolve, reject) {           
                setTimeout(() => {
                    if (isNaN(n) || isNaN(r)) {
                        error = 'One of input is not a number';
                        reject(error);
                    }
                    else {
                        if (n == r) {
                            resolve(1);
                        }
                        else {
                            resolve(factorial(n) / (factorial(r) * factorial(n - r)))
                        }
                }
                }, 1500)
       

        })
    },
}