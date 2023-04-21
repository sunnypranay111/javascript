"use strict"

let title = ["JavaScript","Pranay","SixMonths",6000,"April"];

console.log("before deep copy======",title);
let heading = title
heading.push("Banglore");
console.log("after shollow copy======",heading);
console.log("after shollow copy oriinal======",title);