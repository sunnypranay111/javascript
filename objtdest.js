"use strict"

let states_capitals = {
    "Jammu_Kashmir": "Srinagar",
    "Himachal_Pradhesh": "Dehradun",
    "Haryana": "Chandigarh",
    "Bhihar": "Patna",
    "Goa": "Panaji",

}

// console.log("states_capitals===",states_capitals);

// let{Jammu_Kashmir,Himachal_Pradhesh,Haryana,Bhihar} = states_capitals;

// console.log(Jammu_Kashmir);
// console.log(Himachal_Pradhesh);
// console.log(Haryana);
// console.log(Bhihar);

function add({...a}){
 
let{Jammu_Kashmir,Himachal_Pradhesh,Haryana,Bhihar,...remaining} = a;

console.log(Jammu_Kashmir);
console.log(Himachal_Pradhesh);
console.log(Haryana);
console.log(Bhihar);
console.log(remaining);
    return ;
}

let result = add(states_capitals)





// console.log("haryna caiptal===",states_capitals.Haryana);
// console.log("haryna caiptal===",states_capitals.Haryana);
// console.log("Jammu Kashmir caiptal===",states_capitals["Haryana"]);

// delete states_capitals["Haryana"];
// console.log(states_capitals)

// states_capitals.Goa = "Panaji"
// states_capitals["Karnataka"] = "Banalore"


// console.log(states_capitals)

