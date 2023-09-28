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
console.log(regularUser.fullName.userName.firstname)
