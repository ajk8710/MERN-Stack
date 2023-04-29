// Special kind of Collection created in ES6 to set iterables even with non primitive key's unlike other collections (json)
// Allows us to use a lot of methods to get, set, delete and do other operations without much pain
// Remembers insertion order so the fetch is always easy compared to any other collection

// Map
// [{key : "value"}]
let myMap = new Map();

// keys of multiple types
let keyString = "a string", keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "This is string key value");
myMap.set(keyObj, "This is object type key value");  // keys like non number or alphanumeric, is termed as weak map
myMap.set(keyFunc, "This is function type key value");
myMap.set(keyNum, "This is number type key value");

// console.log(myMap);
console.log(myMap.get("a string"));
console.log(myMap.get(keyString));

console.log(myMap.get({}));  // this {} is new object, so value is undefined
console.log(myMap.get(keyObj));  // this refers to same object

myMap.delete(keyString);
console.log(myMap.size);
console.log(myMap.has(keyObj))
// console.log(myMap.entries());

// Set: it creates a list of unique values and would have similar operations like we do in map

let studentSet = new Set(["Garrick", "Sohail", "Alex", "Boubakar", "Tien", "David"]);

console.log(studentSet.has("David"));

studentSet.add("Lemar");
console.log(studentSet);

studentSet.add("David");  // duplicate not added
console.log(studentSet);


// Create a new set and map and check 5 operations in each
