const express = require("express");
const app = express();

var cp=require("cookie-parser");

app.use(cp());

// app.get("/",(req,res)=>{
//     res.cookie('name','Express');
//     res.cookie('fname','JS');
//     res.send(req.cookies.name+req.cookies.fname);
// });

// app.listen(5050);


app.get("/",(req,res)=>{
    res.cookie('name','ExpressJS');
    res.cookie('fname','JS');
    res.cookie('ID','2',{expires:new Date(Date.now()+10000)});
    res.cookie('email','e@gmail.com',{maxAge:2000});
    res.clearCookie('fname');
    res.send(req.cookies);
});

app.listen(5050);