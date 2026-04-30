const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));

app.post("/login",(req,res,next)=>{
  const name = req.body.uname;
  const email = req.body.email;
  res.set("content-type", "text/html");
  res.write("<h1>Welcome "+name+"!<br> Email: "+email+"</h1>");
  next();
});

app.post("/login", (req, res) => {
  const sub=req.body.news;
  if(sub!="on"){
    res.write("<h4 style='color:yellow'> You can subscribe <a href='/sub'>Link</a></h4>");
  }
  else{
    res.write("<h4 style='color:green'>Thankyou! For subscribe</h4><a href='/'>Logout</a>");
  }
  res.send()
});

app.get("/sub",(req,res)=>{
    res.set("content-type", "text/html");
    res.write("<h4 style='color:green'>Thankyou! For subscribe</h4><a href='/'>Logout</a>");
    res.send();
});

app.listen(6005)