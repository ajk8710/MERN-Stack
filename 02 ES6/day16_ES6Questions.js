// 1. How to preserve the immutability on my heroes list? Solve below problems using the same 

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// a. Get heroes who are not evils
let isNotEvil = heroes.filter(eachHero => eachHero.isEvil == false);
console.log(isNotEvil);

// b. Print Unique family names
let familyNames = heroes.reduce( (theSet, curr) => (theSet.add(curr.family)), new Set() )
console.log(familyNames);

// Other way:
let familyNames2 = heroes.reduce( (theSet, curr) => {
    theSet.add(curr.family);
    return theSet; 
}, new Set() )
console.log(familyNames2);


// c. Print Hero Names from given objects, and append sir in each of them before printing
console.log(heroes.map(eachHero => "sir" + eachHero.name));

// d. Do we have any hero in Marvel Family who is not evil
console.log(heroes.some(eachHero => eachHero.isEvil == false));


// 2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let mySet = new Set();
let myMap = new Map();
mySet.add("pikachu");
mySet.add("squirtle");
myMap.set(1, "pikachu");
myMap.set(2, "squirtle");
console.log(mySet);  // { 'pikachu', 'squirtle' }
console.log(myMap);  // { 1 => 'pikachu', 2 => 'squirtle' }

console.log(myMap.get(2));  // squirtle

console.log(mySet.has("charmander"));  // false
console.log(myMap.has(1));  // true
console.log(mySet.size);  // 2
console.log(myMap.size);  // 2
mySet.delete("squirtle");
myMap.delete(2);
console.log(mySet);  // { 'pikachu' }
console.log(myMap);  // { 1 => 'pikachu' }
mySet.clear();
myMap.clear();
console.log(mySet.size);  // 0
console.log(myMap.size);  // 0


// 3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
// SKIP FOR NOW


// 4. Using the promise object at #3 create an async and await feature
// SKIP FOR NOW


// 5. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
// also need to print students of the session using same example
// let numList = [-1, 2, 4, -2, 10];

// function multiply(...params) {
//     return params.reduce((prev, curr) => {console.log(prev, curr); return prev * curr}, 1);
// }

// console.log(multiply(numList));
// not working


// 6. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

let {userDetails:{last, contactNum = 9119119110}} = person;
console.log(last, contactNum);


// 7. Give me an example of const data manipulation
const myConst = "const declared";
// const myConst = "const declared";  // re-declaration not allowed
// myConst = "new const assigned";    // Error: re-assignment is not allowed

// There is one way we can do so?


// 8. What is the difference between for-of and for-in show with examples
alpha = ["a", "b", "c"];

// for-in iterates through keys. On array, key is an index
for (const idx in alpha) {
    console.log(idx);  // 0, 1, 2
}

// for-of iterates through elements. To use for-of, the key must be number
for (const element of alpha) {
    console.log(element);  // a, b, c
}

// We can use for-in to iterate over keys on object
let student = {name: "pikachu", age: 21}
for (const objKey in student) {
    console.log(objKey);  // name, age
}



//9. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

//10. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios