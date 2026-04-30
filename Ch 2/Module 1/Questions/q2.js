// Write one json string with date property (dd/mm/yyyy) and print date in indian standerd time.

const obj = JSON.parse('{"Name":"abc","dob":"1994-04-30"}');

console.log(obj.dob);

var a = new Date(obj.dob);
console.log("Time: " + a);