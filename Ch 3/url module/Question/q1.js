// URL Module - Parse and Calculate Average
// Question: Parse a URL and calculate the average of three numbers from query parameters
// Task:
// 1. Parse provided URL using URL module
// 2. Extract three query parameters (m1, m2, m3)
// 3. Calculate average of the three numbers
// 4. Display result

var u = require("url");  // Import URL module

process.noDeprecation = true;  // Suppress deprecation warning for url.parse()

// Example URL with three number parameters
var adr = "http://localhost:8080/test?m1=50&m2=60&m3=70";

// Parse URL with query string as object (second parameter: true)
var q = u.parse(adr, true);
console.table(q.query);           // Display query parameters: { m1: '50', m2: '60', m3: '70' }
console.log(typeof q.query.m1);  // Log data type: string

// Convert string query parameters to integers
var m1 = parseInt(q.query.m1);  // Convert "50" to 50
var m2 = parseInt(q.query.m2);  // Convert "60" to 60
var m3 = parseInt(q.query.m3);  // Convert "70" to 70

// Calculate average of three numbers
var avg = (m1 + m2 + m3) / 3;  // (50 + 60 + 70) / 3 = 60

console.log(avg);  // Output: 60
