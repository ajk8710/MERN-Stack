// Javascript Basics Assessment - 19th April - 2023

// Q1. Create a file with name basics and show all the features that you know about javascript 
//   - name and one liner description with one example short
// Attached.


// Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

var myVal = "Robert ";
console.log(myVal + " " + typeof(myVal));

myVal = .0266;
console.log(myVal + " " + typeof(myVal));

myVal = false;
console.log(myVal + " " + typeof(myVal));

myVal = {myname : "Test Me"};
console.log(myVal + " " + typeof(myVal));

myVal = 25166665;
console.log(myVal + " " + typeof(myVal));

myVal = undefined;
console.log(myVal + " " + typeof(myVal));

myVal = true;
console.log(myVal + " " + typeof(myVal));

myVal = "Robert Jr.";
console.log(myVal + " " + typeof(myVal));

myVal = null;
console.log(myVal + " " + typeof(myVal));

myVal = {};
console.log(myVal + " " + typeof(myVal));

myVal = -32767;
console.log(myVal + " " + typeof(myVal));


// Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function showUserInfo(firstname, lastname, age) {
    console.log(`First Name: ${firstname}, Last Name: ${lastname}, Age: ${age}`);
}

showUserInfo('Red', 'Blue', 21);


// Q4. Create a function with name and pass three parameters and return the sum of all the three numbers
// Following outputs needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function add(first, second, third) {
    return first + second + third;
}

// Normal expectation: 2 + 3 + 4 = 9
console.log("add(2,3,4) " + add(2,3,4));

// Not a Number: 2 + undefined + undefined = NaN. Undefined is default value for a variable in Javascript.
// Number of parameters in a function and a function call does not need to match in Javascript, unlike Java.
console.log("add(2) " + add(2));

// Not a Number: 2.3 + 3 + undefined = NaN.
console.log("add(2.3,3) " + add(2.3,3));

// A string "first2three": String concatenation happens when adding number to string.
console.log("add(\"first\", 2, \"three\") " + add("first", 2, "three"));


//Q5. A detailed example implementation of event loop using multiple settimeouts
setTimeout(function() {
    console.log("1st")  // pushed first, done after 1s.
    setTimeout(function() {console.log("3rd")}, 0);  // pushed fourth, but done after 1s.
}, 1000);
setTimeout(function () {console.log("2nd")}, 1000);   // pushed second, done after 1s.
setTimeout(function () {console.log("4th")}, 2000);   // pushed third, but done after 2s.


//Q6. Print the topics you remember so far exporting it from one file an printing in another

var varToExport = "Var to Export";
var objToExport = {id: 1};
module.export = {varToExport, objToExport}
globalThis.myGlobalVal = "my Global Val"; // available to other modules although not explicitly exported

// To import:
// var {varToExport, objToExport} = require("./questions");


// Q7. Example to callback function and nested function - each
user1 = {id: 1, name: "King"};
user2 = {id: 2, name: "Queen"};

// A Callback-function to be passed in as an argument
function getUserInfo(user) {
    return user.id + " " + user.name;
}

// A function using a callback-function as an argument
function printUserInfo(callbackFunc, user) {
    console.log(callbackFunc(user));
}

printUserInfo(getUserInfo, user1);
printUserInfo(getUserInfo, user2);

// Nested function
function outer(param) {

    // var cantSee = i; // i: not visible
    var o = 2;

    function inner() {
        var i = 3;
        return param * o * i; // o: visible
    }

    return inner();
}

console.log(outer(2));
