// Module: Any file or any block of code in javascript

// User object
var User = { 
    firstName : "Mr",
    lastName : "King",
    getUserDetails : function () {
        return this.firstName + " " + this.lastName;
    }
 }

 // Address Object
 var Address = { 
    homeAddress : "Somewhere on earth", 
    officeAddress : "Somewhere in universe"
 }

 // Create student objet with details and put a method to get student details use it in module usage
 var Student = { 
    first : "Mrs", 
    last : "Queen",
    getStudentDetails : function () {
        return this.first + " " + this.last;
    }
 }

var pikachu = "Pika!";

// Exporting objects User, Address
module.exports = {User, Address, Student, pikachu};

// module.exports = {Student}; // this hides module.exports = {User, Address, Student, pikachu};

console.log("Printing from day05_module.js");
