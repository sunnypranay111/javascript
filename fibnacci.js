"use strict"

let a = 1;
let b = 1;
let c = 0;

console.log("Original Values");

console.log("a = ", a);
console.log("b = ", b);

for (let i = 0; i <= 6; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log("Fibonacci Values",c);
    // console.log(c);
}