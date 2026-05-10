// HTTP Module - Multiple Routes and Error Handling
// Question: Create pages with different routes and handle 404 errors
// Task:
// 1. Create one page with two links: home(/) & about(/about)
// 2. Both pages must contain HTML content with required links
// 3. If user accesses any other URL path, redirect to error page with "Page Not Found" message

var http = require("http");  // Import HTTP module

var server = http.createServer(function (req, res) {
  // Check if request URL is home page
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });  // Status 200 OK
    res.write("<h1>Hello</h1>");  // Send HTML content
    res.end();
  } 
  // Check if request URL is about page
  else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });  // Status 200 OK
    res.write("<h1>About page</h1>");  // Send about page content
    res.end();
  } 
  // Handle all other URLs (404 Not Found)
  else {
    res.writeHead(404, { "content-type": "text/plain" });  // Status 404 Not Found
    res.write("Page Not Found");  // Send error message
    res.end();
  }
});

server.listen(5023);  // Listen on port 5023
console.log("Thanks");
