"use strict"

// //syntax function funcion name(parameater1,2,3...){
//     return var name;
// }


var day1="Sunday";


function week(day1){
    var cur_day;

    if(day1 == "Sunday"){
        cur_day = day1;   
    }else if(day1 == "Monday"){
        cur_day = day1
    }else if(day1 == "Tuesday"){
        cur_day = day1;   
    }else if(day1 == "Wednesday"){
        cur_day = day1;   
    }else if(day1 == "Thursday"){
        cur_day = day1;   
    }else if(day1 == "Friday"){
        cur_day = day1;   
    }else if(day1 == "Saturday"){
        cur_day = day1;   
    }else {
        cur_day = "This is not a DAY"
    }

    return cur_day;
}

var today = week("sunny");
console.log("Today is "+today);