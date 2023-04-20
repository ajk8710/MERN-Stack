// Call stack is LIFO - Last In First Out way of execution for javascript code

// Call Stack
// Error: Foo is not a good function
// at foo
// at bar
// at baz 
// at Object.<anonymous>
function foo() {
    console.log("foo called")
    throw new Error("Foo is not a good function"); 
}

function bar(params) {
    foo();
}

function baz(params) {
    bar();
}

baz();


// stack size is very limited

// RangeError: Maximum call stack size exceeded
// function breakStack(params) {
//     breakStack();
// }

// breakStack();
