"use strict"
let sunny = function(c,d,...a){
    console.log("using rest operator----", d,c,a);
       return;     
}
let result = sunny(2,3,4,5,6,7,8,9)