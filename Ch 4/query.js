// Express Query String Handling
// Demonstrates how to parse and access query parameters in GET requests

var express = require("express");  // Import Express framework
var app = express();               // Create Express application instance

// Route handler for the /data endpoint
app.get("/data", (req, res) => {
  var datas = req.query;        // Get all query parameters as an object
  var name = req.query.name;    // Extract specific query parameter: name
  var age = req.query.age;      // Extract specific query parameter: age
  
  console.log(typeof name);     // Log the data type of 'name' (should be string)
  console.log(typeof datas);    // Log the data type of 'datas' object
  
  res.write(JSON.stringify(datas));                    // Send all query parameters as JSON
  res.write("\nName : " + name + " Age : " + age);   // Send name and age in formatted text
  res.send();  // Complete the response
});

// Start the Express server on port 5002
app.listen(5002, () => {
  console.log(" Server running at: http://localhost:5002/data?name=pqr&age=30");
  console.log(" Try: http://localhost:5002/data?name=YourName&age=YourAge");
});
