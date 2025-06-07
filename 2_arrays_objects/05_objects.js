
//array ki destructuring 
//abhi objects ki karenge
//direct values bhi nikal sakte hai per destructure kerke sahi rahega

const course={
    coursename:"Js in hindi",
    price:"1000",
    instructor:"hitesh"
}
//code clean ke liye
const {instructor:inst}=course//destructuring
console.log(inst)

//api ke concept pe
//json me value aati hai
//json: me keys bhi string values bhi string
//https://api.github.com/users/hiteshchoudhary

//kahi baar api array ki format me milti hai
// us time us per for loop laga ker 
