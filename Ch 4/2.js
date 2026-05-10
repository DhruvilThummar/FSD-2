// Express - URL Parameters / Route Params
// Demonstrates how to extract dynamic values from URL paths

var express = require("express");  // Import Express framework
var app = express();               // Create Express application

// Example 1: Simple URL Parameter (Commented)
// app.get('/user/:id', function(req, res) {
//     const user = req.params;          // Get all route parameters as object
//     const userID = req.params.id;     // Extract specific parameter: id
//     console.table(req.params);        // Log parameters to console
//     res.send("created profile : " + userID );
// });
// app.listen(3001, function() {
//     console.log("Server is live");
//     console.log("On: http://localhost:3001/user/abc");
// })

// Example 2: Multiple URL Parameters
app.get("/cal/:day/:month/event/:birthday", (req, res) => {
  console.table(req.params);  // Logs: { day: '13', month: '3', birthday: 'Dhruvil' }
  res.send(req.params);       // Send parameters as JSON response
});

app.listen(2007, function () {
  console.log("Server is live");
  console.log("Try: http://localhost:2007/cal/13/3/event/Dhruvil");
  console.log("Or: http://localhost:2007/cal/YOUR_DAY/YOUR_MONTH/event/YOUR_NAME");
});
