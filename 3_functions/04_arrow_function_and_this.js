
// //this keyword current context ko batata hai
// const user={
//     username:"priyansh",
//     price:999,
//     welcomemessage:function () {
//         console.log(`${this.username} welcome to this site`)
//         console.log(this)
//     }
// }

// //arrow function me this nahi hota hai
// user.welcomemessage()
// user.username="Sam"
// user.welcomemessage()//yaha per aayega "Sam welcome to this site"
// // kiuki vo current context ki baat ker rahe hai

// console.log(this)//empty aayega kiuki abhi node me hai
// // browser ke console ke ander empty nahi aayega
// //browser ke ander jo global object hai vo hai window object
//  //this ko only object ke ander use ker sakte hai
// //  function ke ander this ka koi kaam nahi hai


const chai=function(){
    let username="priyansh"
    console.log(this.username)//this only print hojayega kuch kuch but context nahi ker paoge 
    console.log(this)
}
chai()

const ekOrChai=()=>{
    let username="hitesh"
    console.log(this.username)
    console.log(this)
}

ekOrChai()
//arrow function me jab only this ko print karoge tab kuch bhi print nahi hoga

const addTwo=(num1,num2)=> ({username:"Hitesh"})
//implicit return 
console.log(addTwo(2,3))


const myArray=[1,2,3,4,5]



