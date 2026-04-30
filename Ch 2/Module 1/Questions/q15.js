// write a node js program fs module to manege student data.
//  1. create a diractery named "student data".
// inside the directery create a json file students.json containing student record with name and marks(array of three object)
//  2 read the json file, convert it into java sv=cript object abnd display student record in consol.
// 3 displye student whose scord more then 75 marks using loopn and condations.
// 4. delete the file and dirsctery.
// use sync methoud

const ps = require("fs");

// create file
ps.mkdirSync("student data");
console.log("Directory Created");

// make array of three object
let student = [
  { name: "ABC", marks: 30 },
  { name: "BCA", marks: 80 },
  { name: "CAB", marks: 75 },
  { name: "CBA", marks: 88 },
];

// write array in json file
ps.writeFileSync("student data/student.json", JSON.stringify(student));
console.log("You are crating a file");


//read dtafrom json file 
let data = JSON.parse(ps.readFileSync("student data/student.json", "utf-8"));

//print the data 
console.table(data);

// print more the 75 marks student data
console.group("Studentdata");
for (s of data) {
  if (s.marks > 75) {
    console.log(s.name + " " + s.marks);
  }
}
console.groupEnd();


//delete file
ps.unlinkSync("student data/student.json");
ps.rmdirSync("student data");

console.log("file deleted");
