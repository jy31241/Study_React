var fs = require("fs");

console.log("File read start");
var data = fs.readFileSync('main.js');
console.log("File read end");
console.log("File Text")
console.log(data.toString());
console.log("Text End");