var express = require("express");

var app = express();

// app.get('/user/:id',function(req,res)
//     {
//         const user=req.params;
//         const userID=req.params.id;
//         console.table(req.params);
//         res.send("created profile : "+userID);
//     }
// );

// app.listen(3001,
//     function(){
//         console.log("Server is live")
//         console.log("On : http://localhost:3001/user/abc");
//     }
// )

app.get("/cal/:day/:month/event/:birthday", (req, res) => {
  console.table(req.params);
  res.send(req.params);
});

app.listen(2007, function () {
  console.log("Server is live");
  console.log("On : http://localhost:2007/cal/13/3/event/Dhruvil");
});
