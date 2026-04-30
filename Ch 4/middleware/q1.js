//USING EXPRESS JS WITH SATISFY THE REQ.
//CREATE THREE MIDDLE WHERE FUN
//1.SHOW MSG "FIRST FUN EXECUTED"
//2.SHOW MSG "SECOND FUN EXECUTED"
//3.PERFORM SIMPLE ARITHMATIC OPRETION AND STORE THE RESULT IN REQUEST OBJ.
//APPLY ALL FUN IN SEQUENCE IN SINGLE ROUTE "/STUDENT" AFTER ALL EXECUTE THE FINAL RESPONSE IS DISPLAY "THANK YOU".

var express = require("express");

var app = express();

const addone = (req, res, next) => {
  res.write("First function excuted");
  next();
};

const addtwo = (req, res, next) => {
  res.write("\nSecound function excuted");
  next();
};

const addthree = (req, res, next) => {
  res.total = 50 + 40;
  console.log(res.total);
  next();
};

app.get("/student", addone, addtwo, addthree, (req, res) => {
  res.write("\nThank You");
  res.end();
});

app.listen(6005, function () {
  console.log("http://localhost:6005/student");
});
