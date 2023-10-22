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
// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('shortcut promise')
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('run shortcut promise')
// })


// example 3
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve({username: 'rohan', email : 'rohan@gmail.com'})
//     }, 1000)
// }).then(function(data){
//     console.log(data)
// })

// exmaple 4
// const promisFour = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username: 'ram', rollno: 10})
//         } else{
//             reject('ERROR')
//         }
//     }, 1000)
// })
// promisFour.then((data) => {
//     console.log(data);
//     return data.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(err) {
//     console.log('error')
// }).finally(()=> {
//     console.log('The promise is either resolved or rejected')
// });


// exmaple 5

const promisFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: 'sham', rollno: 20})
        } else{
            reject('ERROR')
        }
    }, 1000)
})
async function proFive(){
    try {
        const response = await promisFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
proFive()