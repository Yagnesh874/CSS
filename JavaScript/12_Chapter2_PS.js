const prompt = require("prompt-sync")({ sigint: true });
let marks = {
    harry: 90,
    nilesh: 9,
    shivam: 76,
    shubham: 10
}
//Problem no 1
for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log(" The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//Problem No 2
for(let keys in marks){
    // console.log("The marks of "+ keys + " are "+marks[keys]);
}

//Problem No 3
// let cn=44;
// let n;
// while(n  != cn){
//     n = prompt("Ente the number of n ");
// }
// console.log("You have entered correct number");

//Problem No 4
const mean = (a,b,c,d)=>{
    return(a+b+c+d)/4
}
console.log(mean(6,6,6,6));
