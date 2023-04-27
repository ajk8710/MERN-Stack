// default params are the params used to support unvailability of parameters passed in a funciton

function sum(a = 0, b = 0) {
    return a + b;

    // if (a && b) { a + b; } else { return 0; }
}

console.log(sum(2, 6));  // 8
console.log(sum(2));     // without default parameter: 2 + undefined = NaN
console.log(sum());      // without default parameter: undefined + undefined = NaN
