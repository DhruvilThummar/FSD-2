const express = require("express");
const app = express();

const ejs=require("ejs");

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('first',{name:'DRThummar'});
});

app.listen(1637,debug=true);
