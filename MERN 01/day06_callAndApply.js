
// Topic: 'this' and Function.call(), Function.apply(), Function.bind()

firstName = "GlobalFirst";

var student1 = {firstName: "Garrick", timing: "Morning", session: "CoreJavascript"};
var student2 = {firstName: "Tien", timing: "Morning", session: "Javascript"};

// this: A keyword represents the context of execution of any function

console.log(this); // prints {}


function PrintUserInfo(userId) {
    console.log(this); // this is global when we do not attach any object for execution
    console.log(`Student Id ${userId}, Student Name ${this.firstName}, Session Name ${this.session}`);
}

PrintUserInfo(123); // no object attached to function: this.firstName = GlobalFirst
                    // userId = 123, session = unidentified

PrintUserInfo(student1); // object passed in, but 'this' still refers to global


// Function.call
PrintUserInfo.call(student1, 123); // context of 'this' is now set to student1
PrintUserInfo.call(student2, 123); // context of 'this' is now set to student2


var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"};
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"};

hatchback = "Global Hatchback";

// A function with 5 parameters
function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {

    // prints depending on Function.call(this, args), Function.apply(this, args[])
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback}
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `);

    // prints parameters
    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `);
}

// Function.call takes object and parameters
// Function.apply takes object and array of params
GetVehicleInfo.call(BMW,"YES", 5, 5, 150, "IND");
GetVehicleInfo.apply(SomeCar,["YES", 5, 5, 150, "IND"]);

GetVehicleInfo(BMW); // without call() or apply(), prints "Global Hatchback." 'This' refers global.


// Practice Example
// Print Account (Bank Account) information using call and apply and
// try to see how we get these functions executed immediatly
var account1 = {accountName: "King", balance: 100000};
var account2 = {accountName: "Queen", balance: 50000};


// var accountName = "Global"; // var is not global with new node.js so this.accountName is undefined
accountName = "Global";
balance = 0;

function PrintAccountInfo(param1, param2) {
    console.log(`Name: ${this.accountName}, Balance: ${this.balance}, Params: ${param1} ${param2}`);
}

PrintAccountInfo("p1", "p2"); // prints "Name: Global, Balance: 0, Params: p1 p2"
PrintAccountInfo.call(account1, "p1", "p2");
PrintAccountInfo.apply(account2, ["p1", "p2"]);


// setTimeout
console.log("SetTimeout Start");
//setTimeout(function() {console.log("SetTimeout")}, 1000);

var userInfo = {
    UserName : "Alex",
    Session : "JS",
    GetUserInfo : function () {
        // It prints fine
        console.log(`User Name ${this.UserName}, Session ${this.Session}`);

        // Resolving the context using copy of 'this'
        var that = this; // It's a hack fixing the problem of setTimeout context below

        // After delay, the context is lost, undefined
        // This is executing in setTimeout context
        setTimeout(
            function () {
                // console.log(this); shows it's in different context
                // Context is lost
                console.log(`User Name ${this.UserName}, Session ${this.Session}`)

                // The hack using 'that'
                console.log(`User Name ${that.UserName}, Session ${that.Session}`)
            }, 1000
        );
        
        // Instead of using 'that' hack, bind() is the technicall way
        setTimeout(
            function () {
                console.log(`User Name ${this.UserName}, Session ${this.Session}`)
            }.bind(this), 1000 // .call() or .apply() does not work with setTimeout
        );
    }
}

userInfo.GetUserInfo();
