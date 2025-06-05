
//primitives
//7 types:String,number,null(empty),boolean,undefined(Memory declared hai lenkin value abhi tak nahi aayi),symbol(uniqueness),bigint

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

//Reference (Non primitive)
//Array, Object, Function 
const heror=["shaktiman","doga"]//array

let myObj={
    name:"Priyansh",
    age:22
}

//Functions ko js ke ander as a variable declare ker sakte hai
const myFunction= function () {
    
}
console.log(typeof(myFunction));//prints function object
