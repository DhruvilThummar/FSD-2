// create a sever 

var express = require('express');

var app=express();

// app.get('/',function(req,res)
//     {
//         res.set("content-type","text/plain");
//         res.send("Hello")
//     }
// );

// app.listen(3001,
//     function(){
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// )

// set header yousing send

// app.get('/',function(req,res)
//     {
//         res.send("<H1>Hello</H1>")
//     }
// );

// app.listen(3001,
//     function(){
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// )



// app.get('/',function(req,res)
//     {
//         res.send("<H1>Hello</H1>")
//     }
// );

// app.listen(3001,
//     function(){
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// )



// app.get('/',function(req,res)
//     {
//         res.end("<i>Hello</i>")
//     }
// );

// app.listen(3001,
//     function(){
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// )


// app.get('/',function(req,res)
//     {
//         res.send("<i>Hello</i>")
//     }
// );

// app.listen(3001,
//     function(){
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// )



app.get('/',function(req,res)
    {
        res.set("content-type","text/html");
        res.send("<h1>Hello</h1>");
    }
);
app.get('/about',function(req,res)
    {
        res.set("content-type","text/html");
        res.write("<h1>Hiee</h1>");
        res.send();
    }
);
app.listen(3002,"localhost",
    ()=>{
        console.log("Server is live")
        console.log("On : http://localhost:3002");
    }
)