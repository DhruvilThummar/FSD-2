const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/process",(req,res)=>{
    var fn=req.query.fname;
    var ln=req.query.lname;
    console.table(req.query);
    res.send("Welcome: "+fn+" "+ln);
});

app.listen(5050)