const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname,{index:"login.html"}));

app.post("/go", (req, res) => {
  const name = req.body.uname;
  const pass = req.body.pass;
  if ((name == "admin")&& (pass=="1234")) {
        res.set("content-type", "text/html");
        res.write("<h1 style='color:green'>Welcom Admin!</h1>");
        res.send(); 
  } else {
    res.set("content-type", "text/html");
    res.write("<h1 style='color:red'>plese login with admin name</h1>");
    res.send();
  }
});

app.listen(6003)