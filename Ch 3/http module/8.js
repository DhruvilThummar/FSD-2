// HTTP Module - Create a Server
// Demonstrates how to create and handle HTTP requests using Node.js HTTP module

var http = require("http");  // Import Node.js HTTP module

// Example 1: Simple HTTP Server (Commented)
// http.createServer(function (req, res) {
//     // req: Request object - contains information about the incoming request
//     // res: Response object - used to send response back to client
//     res.writeHead(200, { 'content-type': 'text/html' });  // Set status code and headers
//     res.write("<h1 style='color:pink'>Hello! How are you ?</h1>");  // Write response body
//     res.end();  // Complete the response
// }).listen(5126);  // Listen on port 5126

// Example 2: Multiple Write Operations (Commented)
// http.createServer(function(req, res) {
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.write("<h1 style='color:pink'>Hello! How are you ?</h1>");
//     res.write("<h3>Bye...!</h3>");  // Multiple writes possible
//     res.end();
// }).listen(5126);

// Example 3: Current - Display Request URL
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(req.url + "<br>");  // Display the requested URL path
    res.write("URL fetched");      // Confirmation message
    res.end();                     // End response
  })
  .listen(5126);  // Server listens on port 5126
