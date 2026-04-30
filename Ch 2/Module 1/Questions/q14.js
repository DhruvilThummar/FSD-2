// write a node js script let async write data in file named "test.js".
// if no error accoure during the writing prosees then append additionl data to the same file.
//  finallye read the contaion of the file and displye in it consol after two secound.

var ps = require("fs");

ps.writeFile("test.js", "let a ='You are crating a file'", (err) => {
  if (err) throw err;
  console.log("You are crating a file");

  ps.appendFile("test.js", "\nlet b = 'You are appending a data'", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("You are appending a data");
    }
  });
});

setTimeout(function () {
  ps.readFile("help.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("\nThank you for using async function.\nData read: ", data);
  });
}, 2000);
