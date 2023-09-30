// This and Arrow Function 

// example 1 
// const user = {
//     username : 'ajay',
//     courseprice : 1000,

//     welcomemessage : function (){
//         console.log(`${this.username}, welcome to website`)
//         // console.log(this)
//     }
// }

// user.welcomemessage()
// user.username = 'sam'
// user.welcomemessage()
// console.log(this)
// example 2
function game(){
    let username = 'dam'
    console.log(username.this)
}
game()


// example 3
const ex3 = () => {
    let username = 'dam'
    console.log(username.this)
}
// ex3()