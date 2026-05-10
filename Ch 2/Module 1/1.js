// JSON Handling Examples in Node.js
// This file demonstrates JSON parsing, stringify, and object manipulation

// Example 1: Creating and Logging a JSON Object
// var a = {
//     "name": "abc",
//     "age": 25
// };
// console.log(a);  // Logs the object to console

// Example 2: Loading JSON from External File
// const data = require("./1.json");  // Import JSON file as a module
// console.log(data)

// Example 3: JSON.parse() - Convert String to Object
// Parses a JSON string and converts it into a JavaScript object
// let obj = JSON.parse('{"var1":"lj","var2":"University"}');
// console.log(obj);                          // Logs: { var1: 'lj', var2: 'University' }
// console.log(obj.var1+" "+obj.var2);       // Access object properties

// Example 4: String Without Parsing (Wrong Way)
// let obj = ('{"var1":"lj","var2":"University"}');  // This is just a string
// console.log(obj);                    // Logs the string as-is
// console.log(obj.var1+" "+obj.var2);  // Returns 'undefined undefined'

// Example 5: JSON.stringify() - Convert Object to String
// Converts a JavaScript object into a JSON string
// let obj = JSON.stringify({"var1":"lj","var2":"University"});
// console.log(obj);  // Logs JSON string: '{"var1":"lj","var2":"University"}'
// console.log(obj.var1+" "+obj.var2);  // var1 and var2 will be undefined

// let update= JSON.parse(obj)
// console.log(obj);
// console.log(update.var1+" "+update.var2);


// update json
// let p = {
//     name : "fsd",
//     age :  22 ,
//     city : "Rajkot"
// }
// p.age=30;
// console.log(p);

// p["city"]="Ahm";
// console.log(p);

// let key = "name";
// p[key]="python";
// console.log(p);

// p.marks=25;    // if property is not exist thaen it add those property
// console.log(p);


// Data types of JSON
// var a = JSON.parse('{"name":undefined}');
// console.log(a);

// var a =('{"name":undefined}');
// console.log(a);

// let data = JSON.parse('{"name":"fsd","DOB":new Date()}');
// console.log(data);

// let data = ('{"name":"fsd","DOB":new Date()}');
// console.log(data);

