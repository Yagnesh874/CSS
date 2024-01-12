const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("enter your age")
if (a < 0) 
{
    console.log("Invalid age");
}
else if (a < 9) 
{
    console.log("Your are a kid You can't think about drive a car");
}
else if (a < 18 && a >= 9) 
{
    console.log("You can drive but if your age is above 18");
}
else 
{
    console.log("You can drive your age is above 18 ");
}

