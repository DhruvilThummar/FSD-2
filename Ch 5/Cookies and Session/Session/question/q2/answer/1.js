const express = require("express");
const session = require("express-session");
const app = express();

const es=require('express-session');

app.use(express.urlencoded({ extended: true }));

app.use(es({
    resave:false,
    saveUninitialized:false,
    secret:"lju123"
}));

app.use(express.static(__dirname));

app.post("/savsession",(req,res)=>{
    req.session.uname=req.body.uname;
    req.session.pass=req.body.pass;
    res.redirect("/fetch");
});

app.get("/fetch",(req,res)=>{
    res.set("content-type","text/html")
    res.write("Welcome: "+req.session.uname);
    res.write("<br><a href='/deletesession'>Logout</a>");
    res.send();
});

app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.redirect("/");
});

app.listen(1603,debug=true)