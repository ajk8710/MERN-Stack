// Functions : JS is functional programming language and its power lies in the spirits of functions or variations of functions
// As most of the essential features are built through functions so it is termed as - first class member citizens

// If nothing is returned from a function JS from its implementation will return default value, i.e- undefined
function f1(params) {
    return params * params;
}

console.log(f1(5));
console.log(f1()); // NaN - Not a number (undefined * undefined)


// 1. Named functions - a function definition with name is termed as named function
function multiply(param) {
    return param * param;
}

console.log(multiply(6)); // must have semicolon here, otherwise this call concatenates with the one below

// 2. IIFE - Immediately Invocable function expression
(function IIFE_Example(sessionName, sessionID) {
    console.log("IIFE session name - " + sessionName + " " + sessionID);
})("MERNSTack", 5); // must have semicolon here, otherwise this function concatenates with the one below

(function noName(v) {
    console.log(v);
})(7);

(function (v) {
    console.log(v);
})(9);


// 3. Function expression
var funcExpression = function (params) {
    return params;
}

console.log(funcExpression("Simplified Function Expression!!!"));

// 4. Constructor function We can create a function to be instantiated like a class
// (After ES6, we have a keyword "class", but you may still find this)
function Area_const(length, width) {
    this.length = length,       // acts as attribute of a class
    this.width = width,         // comma instead of semicolon, for version less than ES6
    this.getArea = function() {    // acts as behavior of a class
        return this.length * this.width;
    }
}

var areaObj = new Area_const(2, 3);
console.log(areaObj.getArea());

// 5. Nested Functions: When one function executed inside other function
function A(params) {
    //console.log(c); // c not visible to A
    var a = "a visible to C"

    function B(params) {

        function C(params) {
            var c = "C";
            console.log(a); // a visible to C
        }

        C(1);

    }

    B(1);
}

A(1);

// Javascript has Global Scope and Function Scope
// ES6 adds block { } scope with let and const.
