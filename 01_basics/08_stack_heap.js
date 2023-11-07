// Stack and heap memory

// stack ==> stack is used to store static data example primitive data types
// heap  ==> heap is used to store dynamic data example non-primitive data types
 

// stack 
// example
let youName = 'Ajay'
let myName = youName
myName = 'Aman'
// console.log(youName)
// console.log(myName)



// heap 
// example
let mydata = {
     email : 'aman@google.com',
     salary : 200000
}

let newData = mydata 

newData.email = 'aman@yahoo.com'

console.log(mydata)
console.log(newData)