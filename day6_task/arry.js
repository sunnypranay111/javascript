"use strict"

var details=["Pranay","Kadiri","graduation",25,"male","SKUniversity","Bangalore" ];

console.log(details[0] === "Pranay");
console.log(typeof(details));
console.log(typeof(details[3]));
console.log(details.length);
console.log(details.length-1);
console.log(details[details.length-1]);

for(var i=0; i<details.length; i++){
    console.log(details[i]);
}

