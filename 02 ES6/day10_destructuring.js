// Destructure helps us to reduce the number of variables initialized 

// a. Array Destructures
// let name = "Some Name", age = 22, session = 1;

// getting data from api - normally comes from array
// let num1 = numberList[0];
// let num2 = numberList[1];


// 1. copying variables from array

let [one, two, three] = [1, 2, 3];  // array gets copied in the variables on left
                                    // (similar to Python: one, two = 1, 2)

console.log(one);    // 1
console.log(two);    // 2
console.log(three);  // 3


// 2. having default assingments

let [first, second, third = 33, fourth = 44] = [1, 2];

console.log(first);   // 1
console.log(second);  // 2
console.log(third);   // 33
console.log(fourth);  // 44


// 3. assiging rest of the values into an array using ..., rest should always be the last parameter

let [uno, dos, ...restOfValues] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(uno);           // 1
console.log(dos);           // 2
console.log(restOfValues);  // [3, 4, 5, 6, 7, 8]


//4. swapping of variables

let a = 9, b = 10;
[a, b] = [b, a];
console.log(a, b);


// b. Destructuring of objects
// 1. in single object

let user = {
    name : "Pikachu",
    age : 21,
    session : "MERNStack"
}

let usr_name = user.name;  // get user.name
console.log(usr_name);

// with object destructuring
let { name } = user;       // get name from user
console.log(name);


// 2. destructuring in nested object

let student = {
    studentname : "Pikachu",
    session : "Secondary",
    marks : {
        math : 89,
        english : 95,
        physics : 99
    }
}

// get studentname marks.math, marks.pysics, marks.chemistry(if not exsit, 92) from student
let {studentname, marks:{ math, physics, chemistry=92} } = student;

console.log(studentname);
console.log(math);
console.log(physics);
console.log(chemistry);


// Practice Example

let StudentTest = {
    firstname : "Squirtle",
    address : "Waterpark",
    sessionTopics : {
        covered1 : "Topic 1",
        covered2 : "Topic 2"
    }
}

// Print firstname and sessionTopics, 
// along with that also get a lastname and covered3 as "ES6", without making any change in StudentTest

let {firstname, lastname="Swims", sessionTopics:{covered1, covered2, covered3="ES6"}} = StudentTest;

console.log(`${firstname} ${lastname} ${covered1} ${covered2} ${covered3}`);
console.log(StudentTest.lastname, StudentTest.covered3); // original oject is unaffected
