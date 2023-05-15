"use strict"

// const { timeout } = require("async")

// let theResult = async function (marks){
//     let result;
//      return result = await new Promise((resolve, reject) => {
//     if (marks > 34){
//         resolve ("Result :: Passed");
//     }else{
//         reject("Result :: Failed");
//     }
//    }) 
    
// }
// let result = theResult(35).then((res)=>{
// console.log(res);
// }).catch ((error) => {
//     console.log(error);
// });





// function hiringProcess1(callback){

//     setTimeout(()=>{
//         console.log("Step1:: Post Job in Job Portals");
//         callback();
//     },3000)
// }

// function hiringProcess2(callback){
//     setTimeout(() => {
//         console.log ("Step2:: Applications Received");
//         callback();
//     }, 4000);
// }

// function hiringProcess3(callback){
//     setTimeout(() => {
//         console.log("Step3:: Screening Applications");
//         callback();
//     }, 5000);
    
// }

// function hiringProcess4(callback){
//     setTimeout(() => {
//         console.log("Step4:: Schedule Interview");
//         callback();
//     }, 6000);
// }

// function hiringProcess5(){
//     setTimeout(() => {
//         console.log("Step5:: Finish Interview");
//     }, 7000);
// }

// hiringProcess1(()=>{
//     hiringProcess2(()=>{
//         hiringProcess3(()=>{
//             hiringProcess4(()=>{
//                 hiringProcess5()
//             })
//         })
//     })
// })



console.log("one");
setTimeout(test,2000);
console.log("three");
function test(){
    console.log("two")
}