
let myDate=new Date();
console.log(myDate.toString());//
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

let myCreatedDate=new Date(2025,0,23,21,30)
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()//ms
console.log(myCreatedDate.getTime())//ms
console.log(myTimeStamp)



let newDate=new Date()
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday:"long",
})
