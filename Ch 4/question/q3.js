// create a web app that,
// 1 displyes a form on the home page to enter a users name.
// 2 send the form data to the server using post methoud the server should read the submited data from the reques body.
// finellye displye a conform massage

var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(`<form action="/login" method="post">
            <input type="text" name='user' />
            <button type="submit">cilck</button>
            </form>`);
});

app.post("/login", (req, res) => {
  const name = req.body.user;
  res.send("User created : " + name);
});

app.listen(5015, function () {
  console.log("http://localhost:5015");
});




// this program using get.

// app.get("/", function (req, res) {
//   res.send(`<form action="/login" method="get">
//             <input type="text" name='user' />
//             <button type="submit">cilck</button>
//             </form>`);
// });

// app.get("/login", (req, res) => {
//   const name = req.query.user;
//   res.send("User created : " + name);
// });

// app.listen(5015, function () {
//   console.log("http://localhost:5015");
// });

