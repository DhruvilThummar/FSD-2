// Write a node.js script tp copy ontain of one file to unother file.
// data should be fetchd from source.txt and inseted to destination.txt.
// read data from destination.txt at the end.
// perfrom all task usinf async programing. (Dont use copy file function)

var ps = require("fs");

ps.writeFile("sourc.txt", "FSD-2 is a sem-IV subject", (err) => {
  if (err) throw err;
  ps.readFile("sourc.txt", "utf-8", (err, data) => {
    if (err) throw err;
    ps.writeFile("destination.txt", data, (err) => {
      if (err) throw err;
      ps.readFile("destination.txt", "utf-8", (err, data1) => {
        if (err) throw err;
        console.log("Data: ", data1);
      });
    });
  });
});

