// promise 

// example 1
const promiseOne = new Promise( function (resolve, reject) {
    setTimeout(function () {
        console.log('first promise')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('successful promise')
})