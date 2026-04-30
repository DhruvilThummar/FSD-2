// 1 register multipal events listeners for deffrient events (myEvent1,myEvent2) 
// 2 removing a specific event listener for myevent2 
// 3 remove all listenesrs accosiated with myEvents1
// 4 triger and observe with listenr exicute 

var eventemitter = require("events");
var ee = new eventemitter();

var fun1 = function (msg) {
    console.log("Msg from myEvent1: " + msg)
}

var fun2 = function (msg) {
    console.log("Msg from myEvent2: " + msg)
}

ee.on("myEvent1", fun1);
ee.on("myEvent1", fun1);
ee.on("myEvent2", fun2);
ee.on("myEvent2", fun2);

ee.removeListener("myEvent2", fun2);
ee.removeAllListeners("myEvent1");

ee.emit("myEvent1", "LJU");
ee.emit("myEvent2", "LJIET");


