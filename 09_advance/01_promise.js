// promise 

// example 1
// const promiseOne = new Promise( function (resolve, reject) {
//     setTimeout(function () {
//         console.log('first promise')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log('successful promise')
// })


// example 2
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('shortcut promise')
        resolve()
    }, 1000)
}).then(function(){
    console.log('run shortcut promise')
})