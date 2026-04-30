// write a node.js program using events modul to simulate a sequence of events.
// 1 when a "connection" event accure, print "connection succesfully" and triger "data-received" event.
// 2 when the data resived event accures print "data recived succesfully"
// 3 finallye print thanks at the end of excution

var eventemitter = require("events");
var ee = new eventemitter();

ee.on("connection", function () {
  console.log("Connection successfully");
  ee.emit("data-recived");  // triger data-received event when connection event accure
});

ee.on("data-recived",function(){
    console.log("Data Recived successfully");
});
ee.emit("connection");  // triger connection event to start the sequence of events

console.log("Thanks");