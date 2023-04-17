"use strict"

// syntax: function "functionname"("parameater1, parameater2,...etc"){
//         return var "variable name";
// }
// call"functionname"("parameater1, parameater2,...etc")

function cur_day(day){
    var weekdays=["Sunday","Monday","Wednesday","Thursday","Friday","Saturday"];
    for(var i=0; i<=weekdays.length; i++){
        if(day === weekdays[i]){
           var thisday="Today is "+weekdays[i];
        }else{
            thisday="this not a day"
        }return thisday;
    }
}


var today = cur_day("aaa")

console.log(today);