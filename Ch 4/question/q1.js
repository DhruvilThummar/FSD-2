// write express.js script to requt server to display json obj on browser

var express = require('express');

var app=express();

student={"name":"LJU",
    "Age":28
}

// ans 1

// app.get('/',function(req,res)
//     {
//         res.write(JSON.stringify(student));
//         res.send();
//     }
// );

// app.listen(3001,"localhost",
//     ()=>{
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// );


// ans 2

// app.get('/',function(req,res)
//     {
//         res.send(student);
//     }
// );

// app.listen(3001,"localhost",
//     ()=>{
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// );

// ans 3

app.get('/',function(req,res)
    {
        res.json(student)
    }
);

app.listen(3001,"localhost",
    ()=>{
        console.log("Server is live")
        console.log("On : http://localhost:3001");
    }
)