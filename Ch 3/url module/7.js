// URL Module - Parse URL Components
// Demonstrates how to parse URLs and extract components using Node.js URL module

var u = require("url");  // Import Node.js URL module

// Example URL with all components
var addr = "https://user:123@video.co:8000/videoplay?doc=-01&ln=en#hello"

process.noDeprecation = true;  // Suppress deprecation warning for url.parse() method

// Example 1: Parse URL (Without Query String as Object)
var q = u.parse(addr);
console.table(q);       // Displays all URL components in a table
console.table(q.query); // Query string as a single string (not parsed)

// Example 2: Parse URL (With Query String as Object)
var q = u.parse(addr, true);  // Second parameter: true = parse query string into object
console.table(q);             // URL components with parsed query object
console.log(q.query);         // Query object: { doc: '-01', ln: 'en' }
console.log(q.query.doc);     // Access individual query parameter: '-01'
console.log(q.query.ln);      // Access individual query parameter: 'en'

// Example 3: Parse URL (Full Parsing)
var q = u.parse(addr, true, true);  // Third parameter: true = additional parsing
console.table(q);  // All components fully parsed