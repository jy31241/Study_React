var fs = require("fs");

console.log("File Read Start");
fs.readFile('main.js',(err,data)=>{
    var s = data.toString();
    console.log(s);
});