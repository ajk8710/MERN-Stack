// compiled + interpreted language (hoisting)

// variables declared usig var and any type of data can be assigned
var test = 25;

// auto casting or dynamic type casting
var test = "Garrick";
console.log(test)
test = 2;
console.log(test)

// variables identifier names are case sensitive
var Test = "David";
console.log(Test)

// identifier names can be alphanumeric but should not start with a number
var Test1 = "David";

// $ and _ special chars are allowed (same as Java)
// console.log(_test)
// console.log($Test)


// ctrl + / (toogle to do comment)

/* --- code --- */ //for multiline comments


console.log("Type to echo: ")

process.stdin.on('data', data =>{
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
    process.exit();
}) // takes data then writes data


process.stdin.on('exit', data =>{
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
}) // this doesn't work - to check in later sessions
