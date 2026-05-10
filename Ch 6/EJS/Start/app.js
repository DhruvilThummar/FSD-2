// Express - EJS Template Rendering
// Demonstrates how to use EJS templating engine with Express

const express = require("express");  // Import Express framework
const app = express();               // Create Express application

const ejs=require("ejs");  // Import EJS templating engine

// Set EJS as the default view engine for rendering template files
app.set('view engine','ejs');

// Route handler for the home page
app.get('/',(req,res)=>{
    // res.render() renders an EJS template and sends it as HTML
    // First parameter: template name ('first' will look in /views/first.ejs)
    // Second parameter: data object to pass to template
    res.render('first',{
        name:'DRThummar'  // Variable passed to template (accessible as <%= name %> in EJS)
    });
});

// Start the Express server
app.listen(1637,debug=true);  // Listen on port 1637
console.log("Server running on http://localhost:1637");
