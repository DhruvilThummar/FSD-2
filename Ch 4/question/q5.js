// write express.js script to perform task as ask below
// 1 add 1 form which contoins user name , password andsubmit boutton . data should be submitted by http post methoud.
// 2 on home page form will be display and while submiting the form on the next page "/login" , if username is admin then it will displye "Welcom admin!" else disply "plese login whith admin name" in red colour

var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(`<form action="/login" method="post">
            User Name <input type="text" name='user' />
            <br>
            Password <input type="password" name='password' />
            <br>
            <button type="submit">cilck</button>
            </form>`);
});

app.post("/login", (req, res) => {
  const name = req.body.user;
  if (name == "admin") {
    res.set("content-type", "text/html");
    res.write("<h1 style='color:green'>Welcom Admin!</h1>");
    res.send();
  } else {
    res.set("content-type", "text/html");
    res.write("<h1 style='color:red'>plese login whith admin name</h1>");
    res.send();
  }
});


app.listen(5015, function () {
  console.log("http://localhost:5015");
});
