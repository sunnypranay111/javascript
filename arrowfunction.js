"use strict"

let bill1 = (total, serviceChares) => total + serviceChares;

let amount = bill1(200, 50)

console.log("Total Amount of Bill1 = ", amount);

let bill2 = (purchses, serviceChares, discount) => {
    let netamount;
    let addtion = purchses + serviceChares;
    let subtration = discount;
    netamount = addtion - subtration;
    return netamount;
}

// let invoice = bill2(1500, 100, 600);

// console.log("Total amount of Bill2 = ", invoice);

// let states_capitals = {
//     "Jammu_Kashmir": "Srinagar",
//     "Himachal_Pradhesh": "Dehradun",
//     "Haryana": "Chandigarh",
//     "Bhihar": "Patna",
//     "Goa": "Panaji",
//     "capitals": function (){
//         console.log(this.Jammu_Kashmir);
//         return this;
//         }
// }

// console.log(this)
// let keys = Object.keys(states_capitals);

// // console.log("Object Keys are ===",keys);



