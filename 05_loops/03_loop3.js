// for of loop 

// example 1 
// let ex1 = ["a", "b", "c", "d", "e", "f"];
// for (const key of ex1) {
//     console.log(key)
// }

// let exx1 = ["a", "b", "c", "d", "e", "f"];
// for (const key in exx1) {
//     console.log(exx1[key])
// }

// map 
const map = new Map()
map.set('IN', "india")
map.set('USA', "united")
map.set('JR', "Jarman")
map.set('De', "france")

// console.log(map)

for (const [key, value] of map) {
    console.log(key,'==>', value)
}



// obj iterator

const game = {
    game1 : 'spiderman',
    game2 : 'NFS'
}
for(const key of game){
    console.log(game)
}