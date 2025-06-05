
let variable="kHan"
 console.log(`Hello my name is ${variable.toLowerCase()}`);

 const game=new String("Mario-hero")
 console.log(typeof(game));//its not a character array its a key value pair(object)
 //fayda yeh hai ki bhot sare metho milte hai

 console.log(game.length);
 console.log(game.toUpperCase());
 console.log(game.indexOf('M'));
 const newString=game.substring(0,4)//starting index and number of letters//no negative values
 console.log(newString);
 const anoterString =game.slice(0,4)//negative value bhi de sakte hai

 let url="https://hitesh.co%20m/hitesh%20ch"
 console.log(url.replace('%20','-'))
url=url.replace('%20','-')
console.log( url.includes('hitesh'))
 
 console.log(url.split('-'));

 
 
 
 
 
 
 