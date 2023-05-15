"use strict"

let states = ["Kerala","Tamilnadu","Karnatka","Andhar Pradhesh","Odissa","Madya Pradhesh","West Bengal","Jammu & Kashmir"];

console.log("south_states===",states);

let [trivndrum,chennai,bangalore,...reming] = states;

// console.log("capitals of tha states===",trivndrum);
// console.log("capitals of tha states===",chennai);
// console.log("capitals of tha states===",bangalore);
// console.log("capitals of tha states===",reming);
// console.log("capitals of tha states===",trivndrum);

let state = function(a){
    let[trivndrum,chennai,bangalore,amarvthi,bhubbaneswar,...remaining] = a;
    console.log("(function destructuring===)","trivndrum capital of ",trivndrum);
    console.log("(function destructuring===)","chennai capital of ",chennai);
    console.log("(function destructuring===)","bangalore capital of ",bangalore);
    console.log("(function destructuring===)","amarvthi capital of ",amarvthi);
    console.log("(function destructuring===)","bhubbaneswar capital of ",bhubbaneswar);
    console.log("(function destructuring===)","remaing states ",remaining);
    return;
}

state(states)