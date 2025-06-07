
//thruthy values and falsy values
// falsy values
//false,0,-0,BigInt(0n),"",null,undefined,Nan
//true values
//"0",'false'," ",[],{},function(){}(empty function)

const emptyObj={}
if(Object.keys(emptyObj).length===0)console.log("empty array")


// Nullish coalescing operator(??)null undefined

let val1=5??10
let val2=null??4

console.log(val1,val2)


//Terinary operator
//condition?true:false
