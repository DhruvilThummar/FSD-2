const express = require("express");
const app = express();

const sess=require('express-session');

app.use(sess({
    resave:true,
    saveUninitialized:true,
    secret:'123'
}));

app.get('/',(req,res)=>{
    console.log('SessionID:',req.sessionID)
    if(req.session.page){
        req.session.page++;
        res.send('You have visited: '+req.session.page+" times");
    }
    else{
        req.session.page=1;
        res.send("Welcome User");
    }
});

app.listen(1303,debug=true);