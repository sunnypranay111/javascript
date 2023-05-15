// "use strict"

// // console.log("1st:: Sunny");
// // console.log("2nd:: Nndha");
// // setTimeout(() => {
// //     console.log("3rd:: Likhith");
// // },3000)
// // console.log("4th:: Ajay");
// // console.log("5th:: Jayanth");

// let spending = [100, 200, 300, 400, 500, 600, 700];

// // for(var i = 0; i < spending.length; i++ ){

// //     console.log("Only 'i' values::", i);
// //     setTimeout(() => {
// //         console.log("Array[i] values(SetTimeOut)::", spending[i]);
// //     }, 3000)

// // }

// // O/P:: 
// // Only 'i' values:: 0
// // Only 'i' values:: 1
// // Only 'i' values:: 2
// // Only 'i' values:: 3
// // Only 'i' values:: 4
// // Only 'i' values:: 5
// // Only 'i' values:: 6
// // Array[i] values(SetTimeOut):: undefined
// // Array[i] values(SetTimeOut):: undefined
// // Array[i] values(SetTimeOut):: undefined
// // Array[i] values(SetTimeOut):: undefined
// // Array[i] values(SetTimeOut):: undefined
// // Array[i] values(SetTimeOut):: undefined
// // Array[i] values(SetTimeOut):: undefined

// // for(let i = 0; i < spending.length; i++ ){

// //     console.log("Only 'i' values::", i);
// //     setTimeout(() => {
// //         console.log("Array[i] values(SetTimeOut'let')::", spending[i]);
// //     }, 3000)  
// // }

// // O/P::
// // Only 'i' values:: 0
// // Only 'i' values:: 1
// // Only 'i' values:: 2
// // Only 'i' values:: 3
// // Only 'i' values:: 4
// // Only 'i' values:: 5
// // Only 'i' values:: 6
// // Array[i] values(SetTimeOut'let'):: 100
// // Array[i] values(SetTimeOut'let'):: 200
// // Array[i] values(SetTimeOut'let'):: 300
// // Array[i] values(SetTimeOut'let'):: 400
// // Array[i] values(SetTimeOut'let'):: 500
// // Array[i] values(SetTimeOut'let'):: 600
// // Array[i] values(SetTimeOut'let'):: 700

// // for(const i = 0; i < spending.length; i++ ){

// //     console.log("Only 'i' values::", i);
// //     setTimeout(() => {
// //         console.log("Array[i] values(SetTimeOut'const')::", spending[i]);
// //     }, 3000)
// // }

// // O/P::
// // Only 'i' values:: 0
// // D:\Sunny_javascript\GIT2\javascript\callback.js:62
// // for(const i = 0; i < spending.length; i++ ){
// //                                        ^

// // TypeError: Assignment to constant variable.
// //     at Object.<anonymous> (D:\Sunny_javascript\GIT2\javascript\callback.js:62:40)
// //     at Module._compile (node:internal/modules/cjs/loader:1254:14)
// //     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
// //     at Module.load (node:internal/modules/cjs/loader:1117:32)
// //     at Module._load (node:internal/modules/cjs/loader:958:12)
// //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// //     at node:internal/main/run_main_module:23:47


// //  for(var i = 0; i < spending.length; i++ ){

// //      i;
// // }
// // console.log("Out side lopp:: Only 'i' values::", i);
// // console.log("Out side lopp::Array[i] values('var')::", spending[i]);
// // setTimeout(() => {
// //     console.log("Out side lopp::Array[i] values(SetTimeOut'var')::", spending[i]);
// // }, 3000);

// // O/P::
// // Out side lopp:: Only 'i' values:: 7
// // Out side lopp::Array[i] values('var'):: undefined
// // Out side lopp::Array[i] values(SetTimeOut'var'):: undefined

// // for(let i = 0; i < spending.length; i++ ){

// //     i;
// // }
// // console.log("Out side lopp:: Only 'i' values::", i);
// // console.log("Out side lopp::Array[i] values('let')::", spending[i]);
// // setTimeout(() => {
// //    console.log("Out side lopp::Array[i] values(SetTimeOut'let')::", spending[i]);
// // }, 3000);

// // O/P:: 
// // D:\Sunny_javascript\GIT2\javascript\callback.js:105
// // console.log("Out side lopp:: Only 'i' values::", i);
// //                                                  ^

// // ReferenceError: i is not defined
// //     at Object.<anonymous> ←[90m(D:\Sunny_javascript\GIT2\javascript\←[39mcallback.js:105:50←[90m)←[39m
// // ←[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)←[39m
// // ←[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)←[39m
// // ←[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)←[39m
// // ←[90m    at Module._load (node:internal/modules/cjs/loader:958:12)←[39m
// // ←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)←[39m
// // ←[90m    at node:internal/main/run_main_module:23:47←[39m



// // function examsprocess1(){
// //     console.log("Step1 :: Notification Realesed");

// // }

// // function examsprocess2(a){
// //     console.log(a);
// //     console.log("Step6 :: Results Passed");
// // }

// // function examsprocess3(){
// //     console.log("Step2 :: Application Submitted");
// // }

// // function examsprocess4(){
// //     console.log("Step3 :: Hall Ticket Received");
// // }

// // function examsprocess5(){
  
// //   return "Step5 :: Exam Results Declered";
// // }

// // function examsprocess6(){
// //     console.log("Step4 :: Attempted the Exam");
// // }


// // examsprocess1();
// // examsprocess2(examsprocess5);
// // examsprocess3();
// // examsprocess4();
// // examsprocess6();

// // O/P::
// // Step1 :: Notification Realesed
// // Step2 :: Application Submitted
// // Step3 :: Hall Ticket Received
// // Step4 :: Attempted the Exam
// // Step5 :: Exam Results Declered
// // Step6 :: Results Passed

// // function addition(a,b){
// //     return a+b;
// // }

// // var reults = addition(2,3);

// // console.log(reults);

// // var array = [1, 2, 3, 4, 5]
// // for (let i = 0; i < array.length; i++) {
// //     setTimeout(() => {
// //         console.log(array[i])
// //     }, 1000);
// // }

// function hiringProcess1(a){
//     console.log("Step1:: Post Job in Job Portals");
//     a();
// }

// function hiringProcess2(a){
//     console.log ("Step2:: Applications Received");
//     a();
// }

// function hiringProcess3(a){
//     console.log("Step3:: Screening Applications");
//     a();
    
// }

// function hiringProcess4(a){
//     console.log("Step4:: Schedule Interview");
//     a();
// }

// function hiringProcess5(){
//     console.log("Step5:: Finish Interview");
// }


// hiringProcess5(hiringProcess4(hiringProcess3(hiringProcess2(hiringProcess1()))))


// hiringProcess1(()=>{
//     hiringProcess2(()=>{
//         hiringProcess3(()=>{
//             hiringProcess4(()=>{
//                 hiringProcess5(()=>{

//                 });
//             });
//         });
//     });
// });






// function serverRequest(query, callback){
//     setTimeout(function(){
//       var response = query + "full!";
//       callback(response);
//     },5000);
//   }
  
//   function getResults(results){
//     console.log("Response from the server: " + results);
//   }
  
//   serverRequest("The glass is half ", getResults);
  
//   Result in console after 5 second delay:
//   Response from the server: The glass is half full!








//   function hiringProcess1(a){
//         setTimeout(() => {
//             console.log("Step2:: Applications Received");
//             a();
//         }, 3000);
//     }

// function hiringProcess2(){
//     setTimeout(() => {
//         console.log ("Step1:: Post Job in Job Portals");
//     }, 2000);
    
// }

// function hiringProcess3(a){
//    setTimeout(() => {
//     console.log("Step3:: Screening Applications");
//     a();
//    }, 4000); 
    
// }

// function hiringProcess4(a){
//     setTimeout(() => {
//         console.log("Step4:: Schedule Interview");
//         a();
//     }, 5000);
// }

// function hiringProcess5(){
//     setTimeout(() => {
//         console.log("Step5:: Finish Interview");
//     }, 6000);
// }

// hiringProcess2();
// hiringProcess1(()=>{
//     hiringProcess3(()=>{
//         hiringProcess4(()=>{
//             hiringProcess5()
//         })
//     })
// })


function hiringProcess1(a){
    setTimeout(() => {
        console.log("Step2:: Applications Received");
        a();
    }, 3000);
}

function hiringProcess2(){
setTimeout(() => {
    console.log ("Step1:: Post Job in Job Portals");
}, 2000);

}

function hiringProcess3(a){
setTimeout(() => {
console.log("Step3:: Screening Applications");
a();
}, 4000); 

}

function hiringProcess4(a){
setTimeout(() => {
    console.log("Step4:: Schedule Interview");
    a();
}, 5000);
}

function hiringProcess5(){
setTimeout(() => {
    console.log("Step5:: Finish Interview");
}, 6000);
}