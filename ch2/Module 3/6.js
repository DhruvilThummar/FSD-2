//  Event module

const eventemitter = require("events");  // import eventemitter module
const ee=new eventemitter();   // create object of eventemitter class


ee.on('start',()=>{  
    console.log("Started");
});
ee.emit('start');   // emit event to call the function



ee.on('start',(start,end)=>{
    console.log("Started from: "+start+" to "+end);
});
console.log("Thanks");
ee.emit('start',1,100);  // emit event to call the function with argument

