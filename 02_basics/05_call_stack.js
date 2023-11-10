// important exmaple + video


// exmaple 1
let a = 10;
let b = 5;
function addnum(num1, num2){
  let total = num1 + num2
  return total
}
let result1 = addnum(a, b)
let result2 = addnum(2, 4)
console.log(result1)
console.log(result2)


// exmaple 2
function one(){
  console.log('one')
  two()
}
function two(){
  console.log('two')
  three()
}
function three(){
  console.log('three')
}
one()