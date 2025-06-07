
const myObject={
    js:"javascript",
    rb:"ruby",
    pd:"Pandas"
}
for (const key in myObject) {
    console.log(`${key}-->${myObject[key]}`)
}

const programming=["js","rb","pd"]
for (const key in programming) {
    console.log(`${key}-->${programming[key]}`)
}


//array ki bhi keys hoti hai 
// uski index ko uski keys bolte hai

// object ka janam hi isliye hua tha ki 
// numbered keys ki jagah or bhi data types key ban paye