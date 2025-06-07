
const map=new Map()
map.set('In','India')
map.set("USA","United States of America")

//map bhi object ki tarah key value pair
//store kerte hai 
//but unique kerte hai and order maintain kerte hai
// store ka

for (const [key,value] of map) {
    console.log(key,"-> ",value)//object me key value form likhke nahi spread ker sakte hai
}

const myObject={
    game1:"NFS",
    game2:"spiderman"
}
// for (const [key,value] of myObject) {//kam nahi karega
//     console.log(key," ",value)
// }