// spread operator is used to spread the values present in an array or in any object

let numberArr = [2, 3, 4, 5, 6, 7, 8]

// Without spread operator
console.log(numberArr[0]);
console.log(numberArr[1]);

// spreads the values after extraction from object
console.log(...numberArr);  // prints 2 3 4 5 6 7

let product = {name : "iPhone", company : "Apple INC."};
let productPrice = {name : "iPhone 12", price : "$1000"};
let address = {name : "iPhone Mobile", deliveryAddress : "Somewhere in NY"};

// This is not a good way of merging. It creates objects withnin object.
let summary = {product, productPrice, address};

address.newProperty = "new property added after shallow copy";
console.log(summary);  // new property shown since summary is shallow copy

// to merge, use assign
// Object.assign(target, sources) method copies properties from sources to target
let summary2 = Object.assign(product, productPrice, address);

address.newProperty2 = "new property 2 added after assign";
console.log(summary2);  // new property 2 not shown since summary2 is deep copy

// Another way is to use spread
let summarySpread = {...product, ...productPrice, ...address};
address.newProperty3 = "new property 3 added after spread";
console.log(summarySpread);  // new property 3 not shown since summarySpread is deep copy 

// assign and spread preserves the immutability when original object property is changed (deep copy)


// Rest Parameter: is the reverse of spread

function sum(a, b, c, d, e, f, g) {
    return a + b + c + d + e + f + g;
}

// Without rest parameter
// sum(numberArr[0], numberArr[1], .....);

// With rest parameter
console.log(sum(...numberArr));


function largeSum(...params) {  // ...params - rest parameter indicating rest of the parameters in a function
    let sum = 0;

    // reduce is a built-in function that iterates over array
    sum = params.reduce(function (prevValue, currentValue, currentIndex, arr) {
        
        console.log("prev: " + prevValue)
        console.log("curr: " + currentValue)
        console.log("idx: " + currentIndex)
        console.log("arr: " + arr)

        return prevValue + currentValue;  // 0+2=2, 2+3=5, 5+4=9

    }, 0);  // 0 is initial prevValue

    return sum;
}

let arrN = [2,3,4];
largeSum(...arrN);


// Questions:
// Spread Operator - 
// create a list of vaccines and print
// create doctor object and print his qualifications and other details using spread
// create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


// Rest Parameter - 
// create a function which accepts start and end of number and generates a array of that size, [100....150]
// then use this array to pass as spread operator into a function named largesum
// in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
