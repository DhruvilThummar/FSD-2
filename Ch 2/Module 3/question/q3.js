// write a node.js script to create 2 listners for a comman events. print number of events asosiated with emitter remoive one of the listenar and call remainng listener. also print number of remaing listeners. 


var eventemitter = require("events");
var ee = new eventemitter();

var listener1=function(){
    console.log("Listener1 Executed");
}
var listener2=function(){
    console.log("Listener2 Executed");
}

ee.on("conn",listener1);
ee.on("conn",listener2);

var count=ee.listenerCount("conn");
console.log("count no: "+count);
ee.emit("conn");

ee.removeListener("conn",listener1);
var count=ee.listenerCount("conn");
console.log("count no: "+count);
ee.emit("conn");

ee.removeAllListeners("conn",listener1);
var count=ee.listenerCount("conn");
console.log("count no: "+count);
ee.emit("conn");