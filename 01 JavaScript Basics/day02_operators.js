//operators : like arithmatic operators
// >, <, >=, =<, =, ==, ===, &&, ||, ! .....

var validAge = "18";
var validProof = true;

// if (validProof == "Valid" && validAge == 18) { // compares only value not data type
// if (validProof == "Valid" && validAge === 18) { // compares value with data type
if (validProof && validAge == 18) {
    console.log("valid voter! can vote");
} 
else {
    console.log("in-valid voter! can't vote");
}

//ternary operator

//operators ? if true : if false

validProof && validAge == 18 ? console.log("valid voter! can vote") : console.log("in-valid voter! can't vote");
