// Loops  

// exmaple 1
// for (let i = 0; i < 10; i++) {
//     const element = i;    
//     console.log(element)
// }


// example 2
// for (let i = 0; i < 10; i++){
//     console.log(`outer loop ${i}`)
//     for (let j = 0; j < 10; j++) {
//         // console.log(`start inner loop ${j}`)
//         console.log(` ${i} * ${j} = ${i*j}`)
//     }
// }


// example 3 
// const myArray = ['game', 'batman', 'superman']
// for( let i = 0; i<myArray.length; i++){
//     let a = myArray[i]
//     console.log(a)
// }

// example 4
for (let index = 0; index < 10; index++) {
    if (index === 5) {
        console.log('detectd 5')
        // break
        // continue
    }
    console.log(index)    
}