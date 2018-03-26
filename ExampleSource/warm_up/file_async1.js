// 파일 읽기 작업이 끝나기 전에 console.log(s)를 실행해서 출력 안됨
var fs = require("fs");

var s;
console.log("File Read Start");
fs.readFile('main.js', function(err,data){
    s = data.toString();
});
console.log("File Read End")
console.log("File Text");
console.log(s);