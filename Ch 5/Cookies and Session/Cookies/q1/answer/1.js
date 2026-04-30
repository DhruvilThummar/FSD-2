var express = require('express');
var app = express();
var cp=require("cookie-parser");
app.use(cp())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname,{index:"form.html"}))
app.post("/next",(req,res)=>
{
    res.cookie('fname',req.body.fname);
    res.cookie('lname',req.body.lname);
    res.cookie('pass',req.body.pass);
    res.redirect("/login")
   
})
app.get('/login',(req,res)=>{
    res.clearCookie('lname');
    res.write("welcome : "+req.cookies.fname);
    res.write("\npass : "+req.cookies.pass)
    res.send();
})
app.listen(5002)   
