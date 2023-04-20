// Any identifier holding some value
var myName = "Boubacar";

globalThis.myGlobalValue = "This is global value for me";

// without var, it seems it is considered global.
// with var, it is not global with upgraded node.js
myGlobalValue2 = "Global Value 2"

var firstName = "First Name for firstName";
var lastName = "Last Name";

var firstName2 = "First Name";
var lastName2 = "Last Name";

var firstName3 = "First Name";
var lastName3 = "Last Name";

// object literals
var User = { firstName : "First Name for User", lastName : "Last Name" }

var User2 = { firstName : "First Name for User 2", lastName : "Last Name" }

console.log(firstName);
console.log(User.firstName);
console.log(User2.firstName);

User.firstName = "Updated Name";
console.log(User);

console.log(global.myGlobalValue);
console.log(myGlobalValue);
