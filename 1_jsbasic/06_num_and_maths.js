
const score=400.876;
console.log(score);

const balance =new Number(100.883)//round off//ye method tab specifically use kerna hai
// jab number me deal karenge
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));//Returns a string representing a number in fixed-point notation

console.log(score.toPrecision(5))//round off kerke string return karega

 const hundreds=10000000000
 console.log(hundreds.toLocaleString('en-IN'))

 //***************Maths***************************

 console.log(Math)
 console.log(Math.ceil(4.2))
 console.log(Math.floor(4.9))
 const minn=10
 const maxx=20
 console.log(Math.floor((Math.random()*(maxx-minn+1))+minn))