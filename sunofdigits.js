"use strict"

let given = 153;

console.log("Given number ::",given)
let remainder = 0;
let cube = 0;
let sum = 0;

for (let i = 1; i <= 3; i++) {
    remainder = given % 10;
    console.log(remainder);
    cube = remainder * remainder * remainder;
    console.log(cube);
    sum = sum + cube;
    console.log(sum);
    given = given / 10;
    console.log(given);
    break;
}

console.log("Sum Of Cube ::", sum)
