// Express - Display JSON Object on Browser
// Question: Create Express.js script to display JSON object on browser
// Task: Display a student object in JSON format on the homepage

var express = require('express');  // Import Express framework
var app=express();                 // Create Express application

// Define a student object
student={
    "name":"LJU",
    "Age":28
}

// ==========================================
// Solution 1: Manual JSON Stringify and Send
// ==========================================
// app.get('/',function(req,res) {
//     res.write(JSON.stringify(student));  // Convert object to JSON string
//     res.send();  // Send response
// });
// app.listen(3001,"localhost", ()=>{
//     console.log("Server is live")
//     console.log("On : http://localhost:3001");
// });

// ==========================================
// Solution 2: Direct Send (Express converts to JSON)
// ==========================================
// app.get('/',function(req,res) {
//     res.send(student);  // Express automatically converts to JSON
// });
// app.listen(3001,"localhost", ()=>{
//     console.log("Server is live")
//     console.log("On : http://localhost:3001");
// });

// ==========================================
// Solution 3: Use res.json() - RECOMMENDED
// ==========================================
app.get('/',function(req,res) {
    res.json(student)  // Best practice: Use res.json() for JSON responses
}
);

app.listen(3001,"localhost", ()=>{
    console.log("Server is live")
    console.log("On : http://localhost:3001");
});

app.listen(3001,"localhost",
    ()=>{
        console.log("Server is live")
        console.log("On : http://localhost:3001");
    }
)