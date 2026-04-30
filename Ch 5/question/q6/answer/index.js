const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));

app.post("/go", (req, res) => {
  const num = req.body.num;
  const number=parseInt(num);
  if(!num){
    res.send("Enter number");
  }
  else if(isNaN(num)){
    res.send("Invalid No.");
  }
  else if(number%2==0){
    res.send("Even number <br> <a href='/'>Try again</a>")
  }
  else{
    res.send("Odd number <br> <a href='/'>Try again</a>")
  }
});

app.listen(6004)