"use strict"
let marks = 94
let obtain = 36
function result(value){
    return new Promise((resolve, reject, ) => {
   
        if(value > 34) {
            resolve(value)
        } else {
            reject("Rejected :: Failed");
             } 
        })
    }
result(obtain).then((data) => {
    return data + 100;
}).then((data) => {
    console.log("2nd then::",data);
});




