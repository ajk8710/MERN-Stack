// We import data from module file
var {User, Address, Student, pikachu} = require("./day05_module");
// require calls day05_module.js first
// printing value from console.log("Printing from day05_module.js");


console.log(User.getUserDetails());

User.firstName = "Updated Mr";

console.log(User.getUserDetails());


console.log(Address.homeAddress);

// Add anonymous function to object Address
Address.getCompleteAddress = function () {
    return this.homeAddress + " " + this.officeAddress;
}

console.log(Address.getCompleteAddress());



console.log(Student); // Student object imported by module.exports & require
console.log(pikachu); // varialbe pikachu imported by module.exports & require
console.log(Student.getStudentDetails());


// var literals = require("./day05_literals"); // calls day05_literals.js
require("./day05_literals"); // calls day05_literals.js

// can acess global value even though day05.literals didn't explicitly used exports statement
console.log(globalThis.myGlobalValue);
console.log(myGlobalValue);

console.log(myGlobalValue2);
