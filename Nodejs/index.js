const express = require("express");
const nodemon = require("nodemon");
const app = express();

// http://localhost:3000/family

app.get("/family", (request, response) => {
    let familydetails = {
        "Father_Nmame": "Kesava Reddy",
        "Mother_Nmame": "Shanthamma",
        "Sure_Nmame": "Bandlapalli",
        "Brother_Name": "Ajay"
    }

    response.send(familydetails);
  nodemon
  start : index.js
});

let personal_details = {
    "Name" : "Pranay Kumar Reddy",
    "Sure_Name" : "Bandlapalli",
    "City" : "Bangalore",
    "Qualification" : "B.Com"
}

// http://localhost:3000/personal


app.get("/personal",(request, response)=>{
    response.json(personal_details);
});




app.listen(3000, () => {
    console.log("Server  port 3000 is working");
});

// http://localhost:4000/job

app.get("/job",(request,response)=>{
    let job_details = {
        "post_name" : "Human Resources",
        "position" : "Manager",
        "employeeID" : "23081",
        "company" : "FHPL",
    }
    response.send(job_details)
})

app.listen(4000,()=>{
    console.log("Server 4000 port is running")
})
