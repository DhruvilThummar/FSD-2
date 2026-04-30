// write an experss.js script to define one json array having properires name and age.
// short this object according to age.
// if user request sorted names in url then  all names along with age shoud be prientd acording to desending order od age.
// also disply json object on home page.

var express = require("express");
var app = express();

var j = [
  {
    name: "abc",
    age: 25,
  },
  {
    name: "bc",
    age: 28,
  },
  {
    name: "c",
    age: 20,
  },
];

app.get("/", function (req, res) {
  res.json(j);
});

app.get("/sort", function (req, res) {
  res.set("content-type", "text/html");
  var des = j.sort((a, b) => b.age - a.age);
  for (k of des) {
    res.write("<h2>" + k.name + "=" + k.age + "</h2>");
  }
  res.send();
});

app.listen(3001, function () {
  console.log("Server is live");
  console.log("On : http://localhost:3001");
  console.log("sorted names On : http://localhost:3001/sort");
});
