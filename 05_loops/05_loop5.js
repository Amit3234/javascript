// foe each 


let ex1 = ["a", "b", "c", "d", "e", "f"];

// ex1.forEach( function (item) {
//     // console.log(item)
// })

// ex1.forEach( (item) => {
//     console.log(item)
// })

// function game(item,index, arr) {
//     console.log(item, index, arr)
// }

// ex1.forEach(game)


// example 2  
const ex2 = [
    {
        lang : 'javascript',
        short : 'js'
    },
    {
        lang : 'java',
        short : 'jav'
    },
    {
        lang : 'python',
        short : 'py'
    },
]

ex2.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
    console.log(item.lang)
})