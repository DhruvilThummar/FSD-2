const express = require("express");
const app = express();

const path=require("path");

const ejs=require("ejs");

app.use(express.urlencoded({extended:true})); 

app.set("views",path.join(__dirname));   // views folder na howa thi

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('form');
});

app.post("/submit",(req,res)=>{
    const uname=req.body.user;
    const result=req.body.marks;
    res.render('result',{uname,result});
});

app.listen(1337,debug=true);
