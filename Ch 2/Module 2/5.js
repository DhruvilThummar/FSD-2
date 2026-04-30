
var path=require("path");

path1 = path.dirname("D:/LJ/abc.html");
console.log(path1);

path2 = path.basename("D:/LJ/abc.html");
console.log(path2);

path3 = path.extname("D:/LJ/abc.html");
console.log(path3);

path4 = path.parse("D:/LJ/abc.html");
console.table(path4);

if (path4.ext==".html"){
    console.log("Allowed");
}
else{
    console.log("Dont Allowed");
}
