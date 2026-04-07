//

var http = require("http");
var u = require("url");
var ps = require("fs");

var addr = "https://www.google.com/exam.txt?c1=10&c2=20&c3=30";
process.noDeprecation = true;
var q = u.parse(addr, true);
var filename = "." + q.pathname;  // extract the file name from the url path 

var m1 = parseInt(q.query.c1);
var m2 = parseInt(q.query.c2);
var m3 = parseInt(q.query.c3);

var total = m1 + m2 + m3;

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  ps.writeFile(filename, total.toString(), (err) => {
    if (err) throw err;
    console.log("File Created");
  });
});

server.listen(5023);
