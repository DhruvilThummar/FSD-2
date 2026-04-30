// write a node.js program to parsh a url and calculate the average of three numbers passed as query peramaters.

var u = require("url");

process.noDeprecation = true; // not compalserye write in exam

var adr = "http://localhost:8080/test?m1=50&m2=60&m3=70";

var q = u.parse(adr, true);
console.table(q.query);
console.log(typeof q.query.m1);

var m1 = parseInt(q.query.m1);
var m2 = parseInt(q.query.m2);
var m3 = parseInt(q.query.m3);

var avg = (m1 + m2 + m3) / 3;

console.log(avg);
