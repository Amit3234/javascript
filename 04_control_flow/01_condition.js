// if else condition 

// example 1
// const temp = 20;
// if (temp === 40){
//     console.log('grater than 20')
// }
// else if( temp === 20){
//     console.log('temp is 20')
// }
// else{
//     console.log('less than is 20')
// }


// example 2
// const game = 10
// if (game > 5) {
//     let power = 'win';
//     console.log(`i am ${power} game`);
// };
// console.log(`i am ${power} game`);


// example 3 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}