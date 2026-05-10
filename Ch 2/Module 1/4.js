// File System (FS) Module - Synchronous File Operations
// This file demonstrates how to work with files using Node.js fs module (sync version)

var ps = require("fs");  // Import fs module for file system operations

// ==========================================
// Example 1: Create Directory (Commented)
// ==========================================
// ps.mkdirSync("node");  // Create a directory synchronously (blocks further execution)

// ==========================================
// Example 2: Write and Append to Files (Commented)
// ==========================================
// ps.writeFileSync("node/write.txt","Hello");  // Create file with content
// ps.appendFileSync("node/write.txt","\nByee");  // Append text to file (\n = newline)

// ==========================================
// Example 3: Read File Content (Commented)
// ==========================================
// data = ps.readFileSync("node/write.txt");  // Returns Buffer object
// console.log(data);  // Logs buffer string (unreadable format)
//
// data = data.toString();  // Convert buffer to readable string
// console.log(data);
//
// // Alternative: Specify encoding directly
// data = ps.readFileSync("node/write.txt", "utf-8");  // Returns string directly
// console.log(data);

// ==========================================
// Example 4: File Operations (Commented)
// ==========================================
// ps.renameSync("node/write.txt", 'node/read.txt');  // Rename file
// ps.copyFileSync("node/read.txt", "node/abc.txt");  // Copy file
// ps.unlinkSync("node/read.txt");  // Delete file
// ps.unlinkSync("node/abc.txt");

// ==========================================
// Important Notes:
// - Sync operations BLOCK code execution (not recommended for production)
// - For non-blocking operations, use Async versions (fs.readFile, fs.writeFile, etc.)
// - Always specify encoding (utf-8) when reading text files
// ==========================================

// delete folder
// ps.rmdirSync("node");

// Sync programin
// ps.writeFileSync("a.txt", "Hiee");
// console.log("Sync Program Complated");
// console.log("Thank you !");

// async programing
// ps.writeFile("b.txt", "Hiee", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Async Program Completed");
//   }
// });
// console.log("Thank You 2");



// ps.writeFile("c.txt", "FSD", (err) => {
//   if (err) throw err;
//   console.log("File c.txt Created");

//   ps.appendFile("c.txt", "-2", function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("\nData Appended");
//     }

//     ps.readFile("c.txt", "utf-8", (err, data) => {
//       if (err) throw err;
//       console.log("\nData read: ", data);
//     });
//   });
// });

