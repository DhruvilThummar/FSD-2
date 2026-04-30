// 1 create one page with two links home(/) & about(/about).
// 2 borth page must contain html content and add requeir contain.
// 3 if user add any other url path, then he?she will be redircted to page and plain massge will be displayed of page note found.

var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Hello</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("Page Not Found");
    res.end();
  }
});

server.listen(5023);
console.log("Thanks");
