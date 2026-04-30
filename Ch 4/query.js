var express = require("express");

var app = express();

app.get("/data", (req, res) => {
  var datas = req.query;
  var name = req.query.name;
  var age = req.query.age;
  console.log(typeof name);
  console.log(typeof datas);
  res.write(JSON.stringify(datas));
  res.write("\nName : " + name + " Age : " + age);
  res.send();
});

app.listen(5002, () => {
  console.log(" http://localhost:5002/data?name=pqr&age=30");
});
