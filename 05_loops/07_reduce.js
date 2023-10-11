// reduce 

// example 1 
// const num = [1,2,3];
// const sum  = num.reduce( (acc, cur) => {
//     console.log(`acc : ${acc} and cur : ${cur}`)
//     return acc + cur
// }, 0)
// console.log(sum)


// example 2
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const sum = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(sum)