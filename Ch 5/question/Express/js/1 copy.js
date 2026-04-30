const express = require("express");
const app = express();
const path=require("path");

const sp=path.join(__dirname,"../Frontend");

app.use(express.static(sp));

// if main html file name is not index.html so use this.
// app.use(express.static(sp,{index:"1.html"})); 

// jo app.use() middleweare na use karvu hoy to app.get() use karvu.
// app.get("/",(req,res)=>{
//     res.sendFile(sp+"/index.html");
// });

app.listen(1212);
