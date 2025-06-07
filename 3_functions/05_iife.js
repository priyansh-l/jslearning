
// imediately invoke function exrpession
// kiuki chaiye -->database ko turant chalu kerne ke
//global scope ke variables se pollution nahi chaiye

(function chai() {
    console.log(`DB Connected`)
})();//named iife
// (function defination)(excecution call);


( (name)=>{
    console.log(`DB again connected, ${name}`)
} )("Priyansh");//unnamed iife 