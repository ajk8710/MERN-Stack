let fsObj = require("fs");

console.log("file read starts");
let fileData = fsObj.readFileSync("./day09_variables.js", "utf-8");
console.log("file data", fileData);
console.log("file read ends");

// Asynchronus way - non blocking way, uses callback


console.log("file read async starts");
fsObj.readFile("./day09_variables.js", "utf-8", (err, data) => { // node system: error first callback
    console.log("err", err);
    console.log("data", data);
});
console.log("file read async starts");


// Event listener class - 




// REPL - Read, Evaluate, Print, Loop
