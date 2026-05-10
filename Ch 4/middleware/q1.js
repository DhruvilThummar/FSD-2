// Express Middleware - Chaining Multiple Functions
// Question: Create three middleware functions and apply them to a route
// Tasks:
// 1. Create middleware 1: Show message "FIRST FUNCTION EXECUTED"
// 2. Create middleware 2: Show message "SECOND FUNCTION EXECUTED"
// 3. Create middleware 3: Perform arithmetic operation and store result in request object
// 4. Apply all functions in sequence to "/student" route
// 5. After all middleware execute, display "THANK YOU"

var express = require("express");  // Import Express
var app = express();               // Create Express app

// ==========================================
// Middleware 1: First Function
// ==========================================
const addone = (req, res, next) => {
  res.write("First function executed");  // Output first message
  next();  // Pass control to next middleware
};

// ==========================================
// Middleware 2: Second Function
// ==========================================
const addtwo = (req, res, next) => {
  res.write("\nSecond function executed");  // Output second message
  next();  // Pass control to next middleware
};

// ==========================================
// Middleware 3: Perform Calculation
// ==========================================
const addthree = (req, res, next) => {
  res.total = 50 + 40;  // Store calculation result in response object
  console.log(res.total);  // Log result: 90
  next();  // Pass control to next middleware
};

// ==========================================
// Route: Apply all middleware in sequence
// ==========================================
app.get("/student", addone, addtwo, addthree, (req, res) => {
  res.write("\nThank You");  // Final response message
  res.end();  // Complete response
});

app.listen(6005, function () {
  console.log("Server running at: http://localhost:6005/student");
});
