// DataType : are used to identify one set of data uniquely

// Other Languages : int, double, big-int, char, string, object....

// Javascript : number, string, null (object), undefined, boolean
// Reference type - object

console.log(myValue); // default value of var's in javascript is unidentified

var myValue = 99;
console.log(myValue); // prints 99
console.log(typeof myValue); // typeof number

myValue = 99.99; // re-asignment
console.log(myValue);
console.log(typeof myValue); // typeof number

var myValue = "99.99"; // re-declaration
console.log(myValue);
console.log(typeof myValue);

myValue = { name : "Alex", friendName : "David" }
console.log(myValue);
console.log(typeof myValue); //object


myValue = null // valid value in js as type of object
console.log(myValue);
console.log(typeof myValue); // object

myValue = undefined
console.log(myValue);
console.log(typeof myValue); // undefined


myValue = true 
console.log(myValue);
console.log(typeof myValue); // boolean


// ES6 : Js updated version has symbol type to declare datatype of own choice

var mySymbol = Symbol("Will Use in my own library");

console.log(mySymbol)
console.log(typeof mySymbol)
