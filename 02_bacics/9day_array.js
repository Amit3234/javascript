// Array example 

// example 1 
let ex1 = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
// console.log(ex1[3])
// console.log(ex1.length)


// example 2 
// push() ==> add end
// unshift() ==> add beginning
// pop() ==> remove the last element
// shift() ==> remove the first element
let ex2 = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
// ex2.push('game')
// console.log(ex2)
// ex2.unshift('sum')
// console.log(ex2)
// ex2.pop()
// console.log(ex2)
// ex2.shift()
// console.log(ex2)



// example 3  ================>  imp   <==================
// slice()  ==>  The splice() method returns an array of the deleted elements
// splice() 
let ex3 = ["Apple", "Banana", "Mango", "Orange", "Papaya", "Red", "Green", "Blue"];
// let exx3 = ex3.slice(1, 3)
// let exxx3 = ex3.splice(1, 3)
// console.log(exx3)
// console.log(exxx3)
// console.log(ex3)


// example 4 
let pets = ["Cat", "Dog", "Parrot"];
let wilds = ["Tiger", "Wolf", "Zebra"];

// let newArr = pets.concat(wilds)
// console.log(newArr)

// spread operator

// let newArr = [...pets, ...wilds]
// console.log(newArr)



// example 5 
const ex5 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const exx5 = ex5.flat(Infinity)
// console.log(exx5);

// example 6
// console.log(Array.isArray('game'))
// console.log(Array.from('game'))
// console.log(Array.from({name: "game"})) // interesting



// example 6
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

