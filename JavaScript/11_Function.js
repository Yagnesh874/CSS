function avg(x,y){
    return (x + y) / 2 
}
let a = 1;
let b = 2;
let c = 3;
console.log("The value of sum is ",avg(a,b));
console.log("The value of sum is ",avg(b,c));
console.log("The value of sum is ",avg(c,a));

// arrow function
const sum = (p,q)=>{
    return p+q;
}

console.log(sum(9,7));