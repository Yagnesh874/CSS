//Primitive data in JavaScript

// nn bb ss u
//n = Null , n = Number
//b = Boolean , b = Bigint
//s = Symbol , s = String
//u = Undefined

let a = null;
let b = 459;
let c = true; // can also be false
let d = BigInt("453") + BigInt("56");
let e = Symbol("I am a nice symbol");
let f = "Hello world";
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof f);

//Object in Js

//Non Primitive Data 

const item={
    "Harry":true,
    "Shubh":false,
    "Lovish":67,
    "Rohan":undefined
}
console.log(item["Harry","Shubh","Lovish","Rohan"])