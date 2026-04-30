// write node.js script to hendel event to write data in file. append data in file and then read the file and display data in consol

var eventemitter = require("events");
var ee = new eventemitter();

const ps = require("fs");

ee.on("write", function () {
  ps.writeFile("abc.txt", "Hello", (err) => {
    if (err) throw err;
    console.log("File Created");
    ee.emit("append");
  });
});

ee.on("append", function () {
  ps.appendFile("abc.txt", "\nappend in file", (err) => {
    if (err) throw err;
    console.log("append in file");
    ee.emit("read");
  });
});

ee.on("read", function () {
  ps.readFile("abc.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

ee.emit("write");
