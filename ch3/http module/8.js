// use httpmodule create a server for hendal https request.

var http = require("http");

// http.createServer(function (req, res) {  // request and response are the object of http module which are used to handle the request and response of the server
//   res.writeHead(200, { 'content-type': 'text/html' });  // set header for response with status code and content type
//   res.write("<h1 style='color:pink'>Hello! How are you ?</h1>");  // write response body
//   res.end();  // end the response  
// }).listen(5126);

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write("<h1 style='color:pink'>Hello! How are you ?</h1>");
//     res.write("<h3>Byee...!</h3>")
//     res.end();
// }).listen(5126);

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write("<h1 style='color:pink'>Hello! How are you ?</h1>");
//     res.write("<h3>Byee...!</h3>")
//     res.end();
//     // res.write("Who are You?")  // its given error write afeter end
// }).listen(5126);

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(req.url + "<br>");
    res.write("url fetched");
    res.end();
  })
  .listen(5126);
