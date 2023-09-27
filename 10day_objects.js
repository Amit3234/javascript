// objects example 

// singleton ==> constructor 
// Object.create 

// object literals
const sym = Symbol('game')
const user = {
    name : "Ajay",
    age : 23,
    'full name' : "Ajay sharma",
    location : "delhi",
    email : "ajay@google.com",
    login : true,
    logday : ['mon', 'wed'],
    [sym] : 'sum'
}

// console.log(user.name);
// console.log(user['email']);
// console.log(user["full name"]);
// console.log(user.sym);
// console.log(typeof user.sym);
console.log(user[sym]);
console.log(typeof user[sym]);




