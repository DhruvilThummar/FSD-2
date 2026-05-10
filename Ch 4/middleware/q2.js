// Express Middleware - Logging and Authentication
// Questions: Create two middleware functions for campus entry logging and ID validation
// Tasks:
// 1. Create middleware that logs when student enters campus
// 2. Create middleware that validates student ID
// 3. If ID is valid, store student name in request object and allow access
// 4. If ID is invalid, stop processing and send "Access Denied"
// 5. Apply both middleware to "/class" route

var express = require("express");  // Import Express
var app = express();               // Create Express app

// ==========================================
// Middleware 1: Entry Logging
// ==========================================
const entrylog = (req, res, next) => {
    console.log("Student entered campus");  // Log entry message
    next();  // Pass to next middleware
};

// ==========================================
// Middleware 2: ID Validation
// ==========================================
const checkId = (req, res, next) => {
    hasId = true;  // Simulated ID check
    
    if(hasId) {
        req.name = "xyz";  // Store student name in request object
        console.log("ID verified");  // Log successful verification
        next();  // Pass to route handler
    }
    else {
        res.send("Access Denied");  // Deny access if ID invalid
        // Note: next() is NOT called, so route handler won't execute
    }
};

// ==========================================
// Route: Apply both middleware
// ==========================================
app.use("/class", entrylog, checkId);  // Apply middleware to this route

app.get("/class", (req, res) => {
    res.send("Welcome " + req.name);  // Access granted, display welcome
});

app.listen(6005, function () {
  console.log("Server running at: http://localhost:6005/class");
});
