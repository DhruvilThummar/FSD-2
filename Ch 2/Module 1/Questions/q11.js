// read data from file and short that data in assending order using  .sort()

var ps = require("fs");

// write data
ps.writeFileSync("1.txt", "50 -1 99 100 20 0 56 78 59");

// read data
data = ps.readFileSync("1.txt", "utf-8");
console.log(data);

//  split the data
d = data.split(" ");
console.log(d);

// sort the data in assedingorder
sdata = d.sort((a, b) => a - b);
console.log("Ans: " + sdata);
