// create a json object wich contains array of objects.
// caluclate peramerter of squer and circle by using site value and daimeter value respactivllye.
//  write object as wall as permeters value in shape.txt file.

const ps =require("fs");

const shape=[
    {"name": "circle","diameter":8},
    {"name": "square","side":10}
]

// write array in json file
ps.writeFileSync("shape.txt", JSON.stringify(shape));
console.log("You are crating a file");


//read dtafrom json file 
let data = JSON.parse(ps.readFileSync("shape.txt", "utf-8"));

//print the data 
console.table(data);

console.group("Calculatetion of circle")
var perameter_of_c = (data[0].diameter)*3.14 ;
console.log("Ans: "+perameter_of_c);
console.groupEnd();
console.group("Calculatetion of squre")
var perameter_of_s = (data[1].side)*4 ;
console.log("Ans: "+perameter_of_s);
console.groupEnd();

const ans = [
    {"name":"perameter_of_c","perameter":perameter_of_c},
    {"name":"perameter_of_s","perameter":perameter_of_s}
];


// append the data 
ps.appendFileSync("shape.txt","\n"+JSON.stringify(ans));
console.log("data appended")

//read datafrom json file 
let final = JSON.stringify(ps.readFileSync("shape.txt", "utf-8"));

//print the data 
console.table(final);