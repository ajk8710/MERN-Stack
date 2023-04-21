// Two new loops are introduced in ES6 to ease out the implementation for developers: for-in & for-of

// for in loop - iterates over keys/properties of object, basically meant for json objects with key values

// for in loop iterates over the keys on object (just like in Python for-in-loop over dictionary)
let user = {name : "King", age : 21, session : "MERNStack"};

for (const key in user) {
    console.log("Key:", key);
    console.log("Values:", user[key]);
}


let arr = [3, 5, 7]; // {0:3, 1:5, 2:7, newKey:"Queen"}

arr.newKey = "Queen";

// for in loop iterates over the index on array (not like Python where it iterates over actuall elements)
                                            //  (Python for-in is acts more like for each)
for (const idx in arr) {
    console.log(idx);
    console.log(arr[idx]);
}


// for of loop - mainely for arrays, iterates over the elements (This is like for each loop)
console.log("For Of Loop");

let cars = ['BMW', 'Volvo', 'Mini']; 

cars.new = "Toyota";  // string key would not be read
cars[3] = "Toyota";

console.log(cars);

for (const car of cars) {
    console.log(car);
}


// Use for-in to iterate over keys on object
// Use for-of to iterate over elements in array (index/keys must be numbers)


// Practice Example
let user2 = {name : "Queen", age : 21, session : "MERNStack"};

let users = [user, user2];

for (const u in users) { // for-in iterates over keys
    console.log(u);  // prints 0, 1 as they are keys
}

for (const u of users) { // for-of iterates over elements
    console.log(u, u.name);
}
