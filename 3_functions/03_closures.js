
//closures ke liye dom apana chaiye
//dom manipulate kerta hai html page ko browser pe

function one() {
    const username="Priyansh"
    function two(){
        const website="You tube"
        console.log(username)
    }
    // console.log(website)

    two();
}
one()

//icecream lene jaise 
// chote mang sakte hai bado se



// ***************intresting***************
console.log(addone(6))
function addone(num) {
    return num+1
}

// console.log(addTwo(5))//hoisting concept
const addTwo=function (num) {
    return num+2
}
//js ke ander variable bhot powerful hai kuch bhi hold ker sakte hai
