
// JavaScript is function oriented programming language - it's behaviour oriented
// It is compiled (compiles funtions) and then intepreted

// console.log(pi); - unidentified
console.log(Rectangle(5,6)); // this works

function Rectangle(length, width) {
    return length * width;
}

var pi = 3.14; // variable declaration

function Circle(radius) {
    return pi * radius * radius;
}

console.log(Circle(5));
