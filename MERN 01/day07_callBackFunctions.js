// Callback function is a function passed as an argument to another function

// A function to be passed in as argument
function ArithmaticOperation(operand, val1, val2) {
    if (operand == "Add") {
        return val1 + val2;
    }
    else {
        return val1 * val2;
    }
}

// takes function as an argument
function DoAddition(func, param1, param2) {
    console.log(func("Add", param1, param2));
}

function Multiply(func, param1, param2) {
    console.log(func("Multiply", param1, param2));
}

DoAddition(ArithmaticOperation, 5, 3);
Multiply(ArithmaticOperation, 5, 9);

// Another style
function DoCaculation(func, operand, param1, param2) {
    console.log(func(operand, param1, param2));
}

DoCaculation(ArithmaticOperation, "Add", 5, 3);
DoCaculation(ArithmaticOperation, "Multiply", 5, 3);

// Using setTimeout
setTimeout(function() {
    DoAddition(ArithmaticOperation, 9, 3);
}, 1000)


// Practice Example
// Write a callback function to print details of the user, calling function should be GetUserInfo

User1 = {id: 1, name: "King"};
User2 = {id: 2, name: "Queen"};

// Version using this
function GetUserInfo(unusedParam) {
    return this.id + " " + this.name;
}

function PrintUserInfo(func, user) {
    console.log(func.call(user)); // must use call(), otherwise 'this' doesn't refer to passed-in object
}

PrintUserInfo(GetUserInfo, User1);

// Version not using this
function GetUserInfo(user) {
    return user.id + " " + user.name;
}

function PrintUserInfo(func, user) {
    console.log(func(user));
}

PrintUserInfo(GetUserInfo, User2);
