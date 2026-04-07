// "FS" Module  (Sync Programing)

var ps = require("fs");

// for create a folder
// ps.mkdirSync("node");

// ps.writeFileSync("node/write.txt","Hello");

// ps.appendFileSync("node/write.txt","\nByee")  //   \n for new line

// data = ps.readFileSync("node/write.txt");
// console.log(data);  // thats give buffer string

// data = data.toString();  // thats convertv buffer string to string
// console.log(data);

// data = ps.readFileSync("node/write.txt", "utf-8");   // utf-8 convert buffer string into stering
// console.log(data);

// for renamne file
// ps.renameSync("node/write.txt",'node/read.txt');

// for copy file
// ps.copyFileSync("node/read.txt","node/abc.txt");

// delete the file
// ps.unlinkSync("node/read.txt");
// ps.unlinkSync("node/abc.txt");

// delete folder
// ps.rmdirSync("node");

// Sync programin
// ps.writeFileSync("a.txt", "Hiee");
// console.log("Sync Program Complated");
// console.log("Thank you !");

// async programing
// ps.writeFile("b.txt", "Hiee", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Async Program Completed");
//   }
// });
// console.log("Thank You 2");



// ps.writeFile("c.txt", "FSD", (err) => {
//   if (err) throw err;
//   console.log("File c.txt Created");

//   ps.appendFile("c.txt", "-2", function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("\nData Appended");
//     }

//     ps.readFile("c.txt", "utf-8", (err, data) => {
//       if (err) throw err;
//       console.log("\nData read: ", data);
//     });
//   });
// });

