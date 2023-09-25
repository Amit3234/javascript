// Number example 

// 1 Number()
// 2 parseInt()
// 3 parseFloat()
// 4 isFinite()
// 5 isInteger()
// 6 toFixed()
// 7 toPrecision() 


// example 1 
// 1 Number  
let ex1 = Number('55')
// console.log(ex1)
let exx1 = (typeof ex1)  
// console.log(exx1)


// example 2
// 2 parseInt()
let ex2 = parseInt(444.22)
// console.log(ex2)

// example 3
// 3 parseFloat()
let ex3 = parseFloat(74.22)
// console.log(ex3)


// example 4
// 4 parseFloat()
// 'hello' = false 
let ex4 = Number.isFinite(74.22)
// console.log(ex4)


// example 5
// 5 isInteger() 
// 11.22 = false    only integer
// 'hello' = false 
let ex5 = Number.isInteger(74)
// console.log(ex5)


// example 6
// 6 toFixed() 
let ex6 = 44.65733
// console.log(ex6.toFixed(2))


// example 7
// 7 toPrecision() 
let ex7 = 44.25733
console.log(ex7.toPrecision(3))
