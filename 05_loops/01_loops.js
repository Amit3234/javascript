// Loops  

// exmaple 1
// for (let i = 0; i < 10; i++) {
//     const element = i;    
//     console.log(element)
// }


// example 2
for (let i = 0; i < 10; i++){
    console.log(`outer loop ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`start inner loop ${j}`)
    }
}