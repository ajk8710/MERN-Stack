// Q1. Create a file with name basics and show all the features that you know about javascript 
//  - name and one liner description with one example short


// Javascript is not type safe. You can declare number variable then reassign as string.
var wasNumber = 1.25;
wasNumber = "now string";
console.log(wasNumber); // prints now string


// Functions are copied on top before execution. Variables are not.
console.log(cantSee); // prints undefined
console.log(see());   // works fine
var cantSee = 1;
function see() {return "see";}


// Number of parameters in a function and a function call does not need to match in Javascript, unlike Java.
console.log(see(1, 2, 3));


console.log(18 == "18"); // true: compares only value not data type. Mindblowing to one who familiar with Java.
console.log(18 === "18"); // false: compares value with data type


// I think constructor function acts as a class blueprint
function constructorFunction(length, width) {
    this.length = length,        // acts as attribute of a class
    this.width = width,          // comma instead of semicolon, for version less than ES6?
    this.getArea = function() {  // acts as behavior of a class
        return this.length * this.width;
    }
}

var areaObj = new constructorFunction(2, 3);
console.log(areaObj.getArea());


// Function expression overwrites named function, while being copied on top before execution.
var f1 = function() {return "Function Expression";}
function f1() {return "Named Function"};

console.log(f1()); // prints "Function Expression"


// Objects can be created without a class, unlike Java. They are within {}.
var myObj = {id: 1, name: "King", getDetails : function() {return this.id + " " + this.name;}};
console.log(myObj);
console.log(myObj.getDetails());


// new Object(object) copies the reference, pointing to same object
var shallowCopy = new Object(myObj);
shallowCopy.name = "New King"
console.log(myObj); // new king

// Object.create() method creates a clone of object, not pointing to same object
var deepCopy = Object.create(myObj);
deepCopy.name = "Old King"
console.log(myObj); // new king

// Object.assign(target, sources) method copies properties from sources to target
Object.assign(myObj, deepCopy);
console.log(myObj); // old king


// Function.call(this, args…) method calls a function with a given this value (object) and then arguments.
// Function.apply(this, args[]) method takes array of arguments.
myObj.name = "Brand New King"

function callAndApply(param1, param2) {return this.name + param1 + param2};

console.log(callAndApply.call(myObj, " p1", " p2"));
console.log(callAndApply.apply(myObj, [" p1", " p2"]));

// Function.bind(this, args...) can work with setTiemout and do not lose context of 'this' passed in.
setTimeout(
    function(param1, param2) {console.log(this.name + param1 + param2)}.bind(myObj, " p1", " p2"), 1000
    );
