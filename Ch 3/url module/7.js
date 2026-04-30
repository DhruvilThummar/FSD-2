var u = require("url");

var addr = "https://user:123@video.co:8000/videoplay?doc=-01&ln=en#hello"

process.noDeprecation = true;  // to avoid the deprecation warning for url.parse() method
var q = u.parse(addr);
console.table(q);

console.table(q.query);

var q = u.parse(addr, true);
console.table(q);
console.log(q.query);
console.log(q.query.doc);
console.log(q.query.ln);

var q = u.parse(addr, true, true);   // sileberse ma nathi 
console.table(q);