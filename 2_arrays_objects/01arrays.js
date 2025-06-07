
const myArr=[0,1,3 ]
const myHeros=["shaktiman"]
const myArray=new Array(1,2,3)
myArray.unshift(9);
console.log(myArray);
myArray.shift();
console.log(myArray);

console.log(myArray.includes(2))
console.log(myArray.indexOf(2))

const newArr=myArray.join('-')
console.log(myArray)
console.log(newArr)
console.log(typeof(newArr))




//slice[start index,end index)//no manipulation in original array
// splice[start index,end index]//manipulates the original one
const myn1=myArray.slice(1,3)
console.log(myn1 )