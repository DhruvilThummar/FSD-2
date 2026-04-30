// crete a web server that, 
// 1 accept a get request with diynamic user id in the url. 
// 2 also accept addinal data(name and age) using quer peramerters. 
// 3 extract , id from rout perameters and name , age from query string. 
// 4 returns a json responce containing all resived data.

var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/user/:id", (req, res) => {
  const user = req.params.id;
  const name = req.query.name;
  const age = req.query.age;
  const userdata={
    "massage":"Data Recived",
    "params":user,
    "query":{
        "name":name,
        "age":age
    }
  };
  res.json(userdata);
});

app.listen(5013, function () {
  console.log("http://localhost:5013/user/DRThummar?name=Dhruvil&age=20");
});
