// Function explanation


// example 1 
// function sum() {
//     console.log(2 + 4);    
// }
// sum()

// example 2 
// function sum(a, b) {
//     return a + b        
// }
// console.log(sum(9, 8))


// example 3  
// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }
// function addTwoNum(num1, num2){
//     let res = num1 + num2;
//     return res
// }
// let sum = addTwoNum(9, 2)
// console.log('sum:', sum)


// exmaple 4 
// function myName(username){
//     if(username === undefined){
//         console.log('please enter your name')
//     }
//     return `${username} log in`
// }
// console.log(myName())


// example 5 
// rest operator
function addcart(...num){
    return num
}
// console.log(addcart(2, 33, 900, 400))

function multicart(val1, val2, ...num){
    return num
}
// console.log(multicart(2, 33, 900, 400))


// example 6 
const user = {
    name : 'sunny deol',
    class : 5
}
function handleobject(anyobject){
    console.log(`name is ${anyobject.name} and class is ${anyobject.class}`);
}
// handleobject(user)
// handleobject({
//     name : 'sunny deol',
//     class : 5
// })



const myArray = [2, 33, 900, 400]

function handle(getArray){
    return getArray[2]
}
// console.log(handle(myArray));
console.log(handle([2, 33, 900, 400]));