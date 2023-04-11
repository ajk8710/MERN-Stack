console.log(Area()) // undefined? No Area?

function Area() {
    return "No Area"
}

console.log(Area(2,3)) // undefined? Two Areas?

function Area(a) {
    return "One Area"
}

console.log(Area(2)) // One Area?

function Area(a, b, c) {
    return "Three Areas"
}

console.log(Area(1,2,3)) // Three Areas?

function Area(b, c) {
    return "Two Areas"
}

console.log(Area(2,3)) // Two Areas?

// In Javascript, there is no overloading. There is overwriting.
// Whatever the last function definition overwrites all other functions with same name.
// Compiled then Intepreted - Hoisting
