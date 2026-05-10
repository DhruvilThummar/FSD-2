// Express - User Login System
// Demonstrates: Form parsing, POST requests, authentication, and conditional responses

const express = require("express");  // Import Express
const app = express();               // Create Express app

// ==========================================
// Middleware Setup
// ==========================================
app.use(express.urlencoded({extended:true}));  // Parse form data (application/x-www-form-urlencoded)
app.use(express.static(__dirname,{index:"login.html"}));  // Serve login.html as default

// ==========================================
// Route: Handle Login Form Submission
// ==========================================
app.post("/go", (req, res) => {
  const name = req.body.uname;  // Get username from form
  const pass = req.body.pass;   // Get password from form
  
  // ==========================================
  // Authentication Logic
  // ==========================================
  if ((name == "admin") && (pass == "1234")) {
        // Credentials are correct
        res.set("content-type", "text/html");  // Set response type
        res.write("<h1 style='color:green'>Welcome Admin!</h1>");  // Success message
        res.send(); 
  } else {
    // Credentials are incorrect
    res.set("content-type", "text/html");  // Set response type
    res.write("<h1 style='color:red'>Please login with admin name</h1>");  // Error message
    res.send();
  }
});

app.listen(6003);  // Listen on port 6003
console.log("Login server running on http://localhost:6003");