// write anode js script thats perfoms the following oprations using path module and async file system module
// 1 from given existing path, extract the dirctery name using path module("LJ/sample.txt")
// 2 create the extrected the dircter inside and exitnig folder.
// 3 extract the file name from the given path and create that file inside the newllye crated directery and write some data into it.
// 4 copy the contain of this file to unother file ("temp.txt")
// 5 delete the origanl file after coping the contain.

var ps = require("fs");

var pm = require("path");

var oldpath = "LJ/sample.txt";

let dir = pm.dirname(oldpath);  // extract the dirctery name using path module("LJ/sample.txt")
let filename = pm.basename(oldpath);  // extract the file name from the given path 

let newpath = dir + "/" + filename; 

ps.mkdir(dir, (err) => {   // create directory
    if (err) throw err;
    console.log("Directory created");

    ps.writeFile(newpath, "Hello world!", (err) => {
        if (err) throw err;
        console.log("File Created");

        ps.copyFile(newpath, dir + "/temp.txt", (err) => {
            if (err) throw err;
            console.log("File copied");

            ps.unlink(newpath, (err) => {
                if (err) throw err;
                console.log("Original File Deleted");
            });
        });
    });
});






