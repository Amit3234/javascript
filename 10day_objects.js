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
// console.log(user[sym]);
// console.log(typeof user[sym]);


// user.email = "ajay@micro.com"
// console.log(user.email);
// Object.freeze(user)

// user.email = "ajay@apple.com"
// user.name = 'aman'
// console.log(user.name);


user.greet = function(){
    console.log('hello world');
}

// console.log(user.greet);
// console.log(user.greet());

user.greetTwo = function(){
    console.log(`hello world ${this.name}`);
}

console.log(user.greetTwo);
console.log(user.greetTwo());




