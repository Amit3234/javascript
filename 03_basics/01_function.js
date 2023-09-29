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
function myName(username){
    if(username === undefined){
        console.log('please enter your name')
    }
    return `${username} log in`
}
console.log(myName())