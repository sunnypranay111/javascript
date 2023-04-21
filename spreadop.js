"use strict"

let title = [1,2,3,4,5,6];
let heading = [7,8,9,10];

console.log("title originl values====",title);
console.log("heading originl values====",heading);

let result = [...title,...heading];

console.log("ater using spread operator====",result);