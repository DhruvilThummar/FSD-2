// Express - Cookie Setting and Management
// Demonstrates how to set, read, and clear cookies in Express applications

const express = require("express");  // Import Express framework
const app = express();               // Create Express application

var cp = require("cookie-parser");  // Import cookie-parser middleware

app.use(cp());  // Use cookie-parser middleware to parse incoming cookies

// Example 1: Simple Cookie Setting (Commented)
// app.get("/",(req,res)=>{
//     res.cookie('name','Express');  // Set a simple cookie
//     res.cookie('fname','JS');      // Set another cookie
//     res.send(req.cookies.name+req.cookies.fname);  // Read cookies and send response
// });
// app.listen(5050);

// Example 2: Advanced Cookie Options
app.get("/",(req,res)=>{
    res.cookie('name','ExpressJS');                      // Set simple cookie
    res.cookie('fname','JS');                            // Set another cookie
    res.cookie('ID','2',{expires:new Date(Date.now()+10000)});  // Expires in 10 seconds
    res.cookie('email','e@gmail.com',{maxAge:2000});     // Expires after 2000ms
    res.clearCookie('fname');  // Remove the 'fname' cookie
    res.send(req.cookies);     // Send all remaining cookies to client
});

app.listen(5050);  // Start server on port 5050