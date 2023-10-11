// Map, filter, reduce 

// example 1
// const ex1 = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
// const game = ex1.forEach( (item) => { 
//     // console.log(item)
//     // return item ==> not return value
// })
// console.log(game)


// example 2 
// const ex2 = [1,2,3,4,5,6,7,8,9,10];
// const num = ex2.filter( (item) => {
//     return item > 4
// })
// console.log(num)

// exmaple 3 
// const ex3 = [1,2,3,4,5,6,7,8,9,10];
// let sum = []
// ex3.filter( (item) => {
//     if(item>4){
//         sum.push(item)
//     }
// })
// console.log(sum)

// example 4 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const ex4 = books.filter( (item) => item.genre === 'History')
// const ex4 = books.filter( (item) => item.publish > 1990 && item.genre === 'History')
// console.log(ex4);


// exmaple 5 
const ex5 = [1,2,3,4,5,6,7,8,9,10];
const num = ex5
              .map( (item) => item * 10)
              .map( (item) => item + 1)
              .filter( (item) => item > 40)
console.log(num)
