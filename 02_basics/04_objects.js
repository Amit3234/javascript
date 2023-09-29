// objects example 

// example 1
// old way 
// const ex1 = {
//     name : 'ajay',
//     class : 9,
//     email : 'ajay@gmail.com'
// }
// console.log(ex1.email)

// example 2 
// new way 
// const ex2 = ['ajay', 9, 'ajay@gmail.com'];
// const [name, rollno, email] = ex2
// console.log(rollno);

// example 3
// new way 
const ex3 = {
    name : 'ajay',
    class : 9,
    email : 'ajay@gmail.com'
}
const {email, name} = ex3
console.log(name);