// objects example 

// singleton ==> constructor 
// Object.create 

// example 1  ===> singleton
const newUser = new Object()
// console.log(newUser)



// exmaple 2 
const loguser = {}

loguser.id = '123abc';
loguser.name = 'john cena'
loguser.logIn = true

// console.log(loguser)
// console.log(Object.keys(loguser));
// console.log(Object.values(loguser));
// console.log(Object.entries(loguser));
console.log(loguser.hasOwnProperty('name'))


// example 3 
const regularUser = {
    email : 'johncena@google.com',
    fullName: {
        userName :{
            firstname : 'john',
            lastname : 'cena'
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullName.userName.firstname)


// example 4 
const ex4 = {1 : 'a', 2 : 'b'}
const exx4 = {3 : 'c', 4 : 'd'}

// const exxx4 = {ex4, exx4}
// const exxx4 = Object.assign({}, ex4, exx4)
const exxx4 = {...ex4, ...exx4}

// console.log(exxx4);



// example 5 
const user = [
    {
        id : 1,
        email : 'john@gmail.com'
    },
    {
        id : 2,
        email : 'john@gmail.com'
    },
    {
        id : 3,
        email : 'john@gmail.com'
    }
]
const game =  user[1].id
// console.log(game)
