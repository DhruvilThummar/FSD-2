// Express - Multer File Upload Handling
// Demonstrates: Single and multiple file uploads with custom naming and storage destination

const express = require("express");  // Import Express
const app = express();               // Create Express app

const multer = require("multer");   // Import Multer for file upload handling

// ==========================================
// Middleware: Serve Static Files
// ==========================================
app.use(express.static(__dirname));  // Serve files from current directory

// ==========================================
// Multer Storage Configuration
// ==========================================
var store = multer.diskStorage({
    destination: "lju",  // Files will be stored in 'lju' folder
    filename: function(req, file, cd) {
        // Generate unique filename: fieldname_timestamp.extension
        cd(null, file.fieldname + "_" + Date.now() + ".docx");
    } 
});

// ==========================================
// Multer Upload Instance
// ==========================================
var upload = multer({
    storage: store
    // Optional: Limit file size (uncomment to use)
    // , limits:{fileSize: 10*1024*1024}  // Max 10MB per file
});

// ==========================================
// Example 1: Single File Upload (Commented)
// ==========================================
// app.post("/upload", upload.single("mypic"), (req, res) => {
//     const file = req.file;  // Access uploaded file
//     if(file) {
//         res.send("File " + file.originalname + " has been uploaded to " + file.destination);
//     }
// }).listen(1337);

// ==========================================
// Example 2: Multiple Files Upload (CURRENT)
// ==========================================
app.post("/upload", upload.array("mypic", 5), (req, res) => {
    const files = req.files;  // Access array of uploaded files
    
    if(files) {
        // Loop through each uploaded file and display info
        for (i of files) {
            res.write("File " + i.originalname + " has been uploaded to " + i.destination + "\n");
        }
    }
    res.send();  // Complete response
}).listen(1637);

console.log("Multer server running on http://localhost:1637");