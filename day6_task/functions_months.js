"use strict"

// //syntax function funcion name(parameater1,2,3...){
//     return var name;
// }

var month="January";


function monthfind(month){
    var cur_mon;

    if(month == "January"){
        cur_mon = month;   
    }else if(month == "February"){
        cur_mon = month;
    }else if(month == "March"){
        cur_mon = month;   
    }else if(month == "April"){
        cur_mon = month;   
    }else if(month == "May"){
        cur_mon = month;   
    }else if(month == "June"){
        cur_mon = month;   
    }else if(month == "July"){
        cur_mon = month;   
    }else if(month == "Augest"){
        cur_mon = month;   
    }else if(month == "September"){
        cur_mon = month;   
    }else if(month == "October"){
        cur_mon = month;   
    }else if(month == "November"){
        cur_mon = month;   
    }else if(month == "December"){
        cur_mon = month;   
    }else {
        cur_mon = "This is not a MONTH"
    }

    return cur_mon;
}

var currentmonth = monthfind("sunny");
console.log("This month is "+currentmonth);