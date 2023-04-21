// variables - var, let, const -

// 1. var is functional scope. let and const are lexical/block scope.
// No hoisting for let and const

{
    var myVar = "var";
    let myLet = "let" ;       // not accessible outside block
    const myConst = "const";  // not accessible outside block
    
}

console.log(myVar);       // works fine
// console.log(myLet);    // not defined error
// console.log(myConst);  // not defined error

// var is functional scope
// if var is outside of any function, it's global scope
function f1() {
    var varInFunction;
}

// console.log(varInFunction);  // not defined error


// 2. re-declare and re-assignment

var myVarDec = "var declared";
var myVarDec = "var declared";  // re-declaration allowed

myVarDec = "new var assigned";  // re-assignment allowed


let myLetDec = "let declared";
// let myLetDec = "let declared";  // re-declaration not allowed

myLetDec = "new let assigned";     //re-assignment allowed
console.log(myLetDec);


const myConstDec = "const declared";
// const myConstDec = "const declared";  // re-declaration not allowed

// myConstDec = "new const assigned";    // Error: re-assignment is not allowed as it is a constant


// 3. Declare first then assign later
var newVar;
let newLet;

newVar = "new var";
newLet = "new let";

console.log(newLet);

// constant needs to be assigned as soon as declared
// const newConst;  // not allowed
const newConst = 25;


// 4. const are immutable 
const Student = {
    Name : "King"
}

console.log(Student);

// Cannot re-assign
// Student = {
//     Name : "Queen"
// }

// Catch - Contents of the reference can be updated
// const does not define a constant value. It defines a constant reference to a value.

Student.Name = "Queen"

console.log(Student)


// 5. Example: var is functional scope and let is block scope

// Here, setTimeout functions are moved from stack to its own API zone, wait minimum of 1 sec
// index increase from 0 to 5
// After minimum of 1 sec, function is put back to stack, then index is refered
// (I'll give you the value of index when function is run)
for (var index = 0; index < 5; index++) {
    setTimeout(function () {
        console.log("Index Value - " + index)
    }, 1000);
}
// prints five 5s.


// Here, setTimeout gets the passed in param while being moved to its own API zone
for (var index = 0; index < 5; index++) {
    (function IIFEexample(param){  // using Immediately Invoked Function Expression
        setTimeout(function () {
            console.log("Index Value - " + param)  // gets 0, 1, 2, 3, 4
        }, 1000);
    })(index)  // index 0, 1, 2, 3, 4 passed to param
}
// prints 0, 1, 2, 3, 4

// Also notice that each 1-sec-wait happens at same time. One setTimeout does not need to wait another setTimeout
// Prints five 5s or 0-1-2-3-4 at once


// let is block scope and value of let is passed in as block is cretaed.
// var is function scope, only reference of var is passed in. Value is refered when function executes.
for (let indexLet = 0; indexLet < 5; indexLet++) {
    setTimeout(function () {
        console.log("Index Value - " + indexLet)
    }, 1000);
}

// console.log(indexLet);  // not accessible outside block
