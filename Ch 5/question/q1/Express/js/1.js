const express = require("express");
const app = express();
const path=require("path");

const htmlpath=path.join(__dirname,"../html");
const csspath=path.join(__dirname,"../css");

app.use(express.static(csspath));
app.use(express.static(htmlpath,{index:"1.html"}));

app.listen(1212);
