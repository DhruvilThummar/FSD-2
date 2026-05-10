// Express - EJS Templating with Form Submit
// Demonstrates: Form handling, EJS template rendering, and data passing to templates

const express = require("express");  // Import Express
const app = express();               // Create Express app

const path = require("path");        // Import path module for directory handling
const ejs = require("ejs");          // Import EJS templating engine

// ==========================================
// Middleware Configuration
// ==========================================
app.use(express.urlencoded({extended:true}));  // Parse form data

// ==========================================
// View Engine Setup
// ==========================================
app.set("views", path.join(__dirname));  // Set views directory to current folder
app.set('view engine', 'ejs');           // Use EJS as template engine

// ==========================================
// Route: Display Form
// ==========================================
app.get('/', (req, res) => {
    res.render('form');  // Render form.ejs template
});

// ==========================================
// Route: Handle Form Submission
// ==========================================
app.post("/submit", (req, res) => {
    const uname = req.body.user;    // Get username from form
    const result = req.body.marks;  // Get marks from form
    
    // Render result template and pass data variables
    // These variables become available in result.ejs as <%= uname %> and <%= result %>
    res.render('result', {
        uname: uname,   // Pass username to template
        result: result  // Pass marks to template
    });
});

app.listen(1337, debug=true);  // Listen on port 1337
console.log("EJS demo server running on http://localhost:1337");
