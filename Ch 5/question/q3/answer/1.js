const express = require("express");
const app = express();

app.use(express.static(__dirname))
app.get("/login",(req,res)=>{
    res.set("content-type","text/html");
    t1=(req.query.msg).split(".");
    console.log(t1);
    for (i in t1){
        res.write(t1[i]+"<br>");
    }
    res.send();
});

app.listen(6001);
