var fs = require("fs");

console.log("File Read Start");
fs.readFile('main.js',function(err,data){
    var s = data.toString();
    console.log("File Read End");
    console.log("file Text");
    console.log(s);
});