
//declare kerne ke do tarike literal and constructor

// singelton(jab constructor se bane)
Object.create 


//literals
const mySym1=Symbol("key1")
const mySym2=Symbol("key2")
const jsuser={
    name:"Priyansh",
    1:"or bhai",
    age:23,
    location:"Kota",
    email:"Priyansh@procore.com",
    itIsLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"],
    [mySym2]:"myKey2" 
}
//key as a string treat kerta hai

// object ko access kaise kare

console.log(jsuser.email)
console.log(jsuser["email"])

console.log(typeof jsuser[mySym2])
jsuser.email="Priyansh@Microsoft.com"
// Object.freeze(jsuser)
jsuser.email="Priyansh@ChatGpt.com"
console.log(jsuser)



//function in obj

jsuser.greeting=function(){
    console.log("Hello js user")
}

jsuser.greeting2=function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(jsuser.greeting)//returns reference of function
console.log(jsuser.greeting())//excecutes that function
console.log(jsuser.greeting2())//excecutes that function
