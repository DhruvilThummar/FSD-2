// write a node js script to write the text "you are creating a file" to help.txt file.
// after that append the text "you are appending data" to the same file.
// after that read and print on console.
// finally print the line "thank you for using async programing"all the opration using async.

var ps = require("fs");

ps.writeFile("help.txt", "You are crating a file", (err) => {
  if (err) throw err;
  console.log("You are crating a file");

  ps.appendFile("help.txt", "\nYou are appending a data", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("\nYou are appending a data");
    }

    ps.readFile("help.txt", "utf-8", (err, data) => {
      if (err) throw err;
      console.log(
        "Thank you for using async function node q\nData read: ",
        data,
      );
    });
  });
});
