// Express Server - Basic Setup and Routing
// This file contains various Express server examples and patterns

var express = require('express');  // Import Express framework
var app=express();                 // Create Express application

// Example 1: Simple Text Response (Commented)
// app.get('/',function(req,res)
//     {
//         res.set("content-type","text/plain");  // Set response content type to plain text
//         res.send("Hello")                        // Send response text
//     }
// );

// app.listen(3001,
//     function(){
//         console.log("Server is live")
//         console.log("On : http://localhost:3001");
//     }
// )

// Example 2: HTML Response with Headers
// app.get('/',function(req,res)
//     {
//         res.send("<H1>Hello</H1>")  // Send HTML response
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