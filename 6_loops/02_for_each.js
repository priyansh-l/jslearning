
const programming=["js","ruby","java",'Python']

function name(ele) {
    console.log(ele)
}

programming.forEach(name);
//name ka reference diya naki name()

programming.forEach((element,index,arr) => {
    console.log(element,index,arr);
    
});

const myCoding=[
    {
        languagename:"js",
        languagfilename:"javascript"
    },
    {
        languagename:"pd",
        languagfilename:"pandas"
    },
    {
        languagename:"rb",
        languagfilename:"ruby"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languagfilename," ",item.languagename)
})