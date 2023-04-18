// Hoisting: is a phenomenon where JS compiler reads all variables and functions pulls them on top of file or 
// function assigns them respective default values, that way we can access the variable/function even before its declaration.
// A reason to say javascript is a compiled language

// 1.  creates the snapshot on top of the file and function
// 2.  variables - undefined
// 3.  functions - function definition

console.log(someValue); // prints undefined

var someValue = "v1";   // while hoisting, js copies the variable on top and assigns default value: undefined

print(5, 5);            // works

function print(a, b) {  // while hoisting, function definition is copied on top
    console.log("result: " + a * b);
}

// functionExpression();                // throws error, cannot find function definition

var funcExpression = function() {       // while hoisting, this is var funnctionExpression = undefined
    console.log("function Expression");
}


// create an example of overloading where one function is function expression

funcExpressionOverloading(1);  // uses function definition captured

var funcExpressionOverloading = function() {
    console.log("function Expression no val");
}

funcExpressionOverloading(1);  // function expression overwrites

var funcExpressionOverloading = function(value) {
    console.log("function Expression with a val " + value);
}

funcExpressionOverloading(1);  // function expression overwrites

function funcExpressionOverloading(value) {
    console.log("function Definition with 2 vals " + value + " " + value);
}

funcExpressionOverloading(2);  // function expression overwrites

// function expression overwrites function definition
