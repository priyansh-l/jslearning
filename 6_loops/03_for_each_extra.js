
const programming=["js","ruby","java",'Python']

//for each value return nahi kerta hai, undefined aata hai
// programming.forEach((ele)=>{
//     return ele
// })

const myNums=[1,2,3,4,56,7,9,4]

let new_nums=myNums.filter((num)=>num>4)
new_nums=new_nums.filter((num)=>{
    return num>9
})
console.log(new_nums)

const newNums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>15)
 
