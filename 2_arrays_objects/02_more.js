
const marvel_heros=["thor","Ironman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[2][0])

all_heros=marvel_heros.concat(dc_heros)//concat naya array return kerta hai

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

const azeeb_array=[1,2,3,[4,5,6],7,[8,9,[10,[11,12]]]]
const normal_array=azeeb_array.flat(Infinity)
console.log(normal_array)




console.log(Array.isArray("Priyansh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Priyansh"}))//intresting array

let score1=10
let score2=20

console.log(Array.of(score1,score2))