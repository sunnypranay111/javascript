"use strict"

let title = ["JavaScript","Pranay","SixMonths",6000,"April"];

console.log("before deep copy======",title);
let heading = [...title]
heading.push("Banglore");
console.log("after deep copy======",heading);
console.log("after deep copy oriinal======",title);
