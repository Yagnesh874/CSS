const prompt = require("prompt-sync")({ sigint: true });
// let sum=0;
// let n=prompt("Enter the value of n ");
// for(let i=0;i<n;i++){
//     sum +=(i+1);
// }
// console.log("The sum of natural number is ",sum);

// For - In loop

let obj = {
    harry: 90,
    shubh: 78,
    nilesh: 67,
    nitin: 89,
    shivika: 56
}
for (let a in obj) {
    console.log(" Marks of " + a + " are " + obj[a]);
}

//For - Of loop

for(let b of "Yagnesh"){
    console.log(b);
}