//  create a middleware that log a massge indicating that a student has enterd tyhe campus when ever the requesd is made.
// create another middleware that chake wather a student has a walid id. if the id is walid. store the student name in a request object and allow accesss.
// if the id is not valid , stop ferther proccsing and send approipriat massage.
// applye both middleware functions to route "/class" .

var express = require("express");

var app = express();

const entrylog=(req,res,next)=>{
    console.log("Student entered campus");
    next();
};

const checkId=(req,res,next)=>{
    hasId=true;
    if(hasId){
        req.name="xyz";
        console.log("ID verified");
        next();
    }
    else{
        req.send("Access Denied");
    }
};

app.use("/class",entrylog,checkId);

app.get("/class",(req,res)=>{
    res.send("Welcome "+req.name);
});

app.listen(6005, function () {
  console.log("http://localhost:6005/class");
});
