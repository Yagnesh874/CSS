//Arithmetic Operators
let a = 11;
let b = 5;
console.log("a - b =", a - b)
console.log("a + b =", a + b)
console.log("a / b =", a / b)
console.log("a * b =", a * b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log(" ++a = ", ++a)
console.log(" a++ = ", a++)
console.log(" --a = ", --a)
console.log(" a-- = ", a--)
console.log(" a =  ", a)
console.log(" a-- = ", a--)

//02 . Assigment Operators

let a1 = 10;
a1 += 90;
console.log(a1);
a1 -= 5;
console.log(a1);
a1 /= 3;
console.log(a1);
a1 *= 5;
console.log(a1);
a1 **= 3;
console.log(a1)
a1 %= 2;
console.log(a1);

//03 . Comparison Operators

let comp1 = 9;
let comp2 = 8;
console.log("comp1 == comp2", comp1 == comp2)
// != The two operands(6,7) area not equal
console.log("comp1 != comp2", comp1 != comp2)
console.log("comp1 === comp2", comp1 === comp2)
// !== The two operands (9,7) are not equal The output will be true
    // The two operands (7,7) are equal The output will be false
console.log("comp1 !== comp2", comp1 !== comp2)

// 04 . Logical Operators

let x = 5;
let y = 6;
console.log(x < y && x == y)
// ||(Logical OR) = if one condition is true The output will be true
            //    = if one condition is false The output will be false  
console.log(x > y || x == 9)
// !(Not equal to)= TRUE . FALSE
            //    = False . TRUE 
console.log(!false);
