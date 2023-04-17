"use strict"

function reverse(num){
    var number = num.toString().split("");
    var reversed = number.reverse().join("");
    return reversed;
}

var result =reverse(123456789);
console.log(result)