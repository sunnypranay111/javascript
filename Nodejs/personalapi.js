const sunny = require("express");

const details = sunny();

let personal_details = {
    "Name" : "Pranay Kumar Reddy",
    "Sure_Name" : "Bandlapalli",
    "City" : "Bangalore",
    "Qualification" : "B.Com"
}

// http://localhost:4000/personal

details.get("/personal",(request, response)=>{
    response.json(personal_details);

});

details.listen(4000,()=>{
    console.log("Server is running on port 4000");
});