// Express - Serve Static Files
// Demonstrates how to serve static files (HTML, CSS, JS) from Express

const express = require("express");  // Import Express framework
const app = express();               // Create Express application
const path=require("path");          // Import path module for file path handling

// Build the path to the Frontend folder (parent directory + /Frontend)
const sp=path.join(__dirname,"../Frontend");

// Serve all static files from the Frontend folder
app.use(express.static(sp));

// Alternative: Serve Custom Index File
// If your main HTML file is NOT named 'index.html', use this:
// app.use(express.static(sp,{index:"1.html"})); 

// Alternative: Using Manual Routing
// Instead of middleware, you can manually route specific files:
// app.get("/",(req,res)=>{
//     res.sendFile(sp+"/index.html");
// });

// Start the Express server
app.listen(1212);  // Server listens on port 1212
