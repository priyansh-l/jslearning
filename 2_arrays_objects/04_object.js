
//singelton or constructor 

const tinderUser=new Object()
// const tinderUser={} non singelton object
console.log(tinderUser)

tinderUser.id="123abc"
tinderUser.name="Priyansh"
tinderUser.isLoggedIn=false

console.log(tinderUser)

const regularUser={
    email:"Some@gamil.com",
    fullname:{
        userFullName:{
            firstName:"Priyansh",
            lastName:"Lashwani"
        }
    }
}

const regularUser2={
    email2:"piyansh@gamil.com",
    fullname2:{ 
        userFullName:{
            firstName:"Priyansh",
            lastName:"Lashwani"
        }
    }
}
const regularUser3=Object.assign({},regularUser,regularUser2)//target source 
console.log(regularUser3)
//assign target object me jo keys same rahegi source se use ki value ko 
// last wale source(regularUser2) same key ki value se update ker dega

const obj3={...regularUser,...regularUser2}//spread operator
console.log(obj3)


//jab database se value aaye

const user1=[
    {
        
    },
    {

    }
]

// Object keys
console.log(Object.keys(tinderUser))//returns an array of keys
console.log(tinderUser.hasOwnProperty("isLoggedIn"))