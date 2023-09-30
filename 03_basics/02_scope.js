// JavaScript Scope 

// JavaScript has 3 types of scope:

// 1) Block scope
// 2) Function scope
// 3) Global scope

// example 1 
// 1) Block scope 
// let and const

{
    const ex1 = 'game'
    let exx1 = 'game1'
    // console.log(ex1);
    // console.log(exx1);
}
// error 
// console.log(ex1);
// console.log(exx1);

// example 2 

// 2) Function scope

function ex2(){
    var name = 'ajay'
    return name
}
// console.log(ex2());
// console.log(name)


// example 3 
// Global Scope  
const a = 1;
let b = 2
var c = 3
// console.log(a);
// console.log(b);
// console.log(c);