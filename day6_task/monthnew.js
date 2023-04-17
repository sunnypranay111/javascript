"use strict"

// syntax: function "functionname"("parameater1, parameater2,...etc"){
//         return var "variable name";
// }
// call"functionname"("parameater1, parameater2,...etc")

function cur_month(monthname){
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    for(var a=0;a<=months.length; a++){
        if(monthname === months[a]){
            return"this month is "+months[a];
        }
    }
}

var Thismonth = cur_month("May");

console.log(Thismonth);
