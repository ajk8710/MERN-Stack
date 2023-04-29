// Class : in ES6 is a special type of function uses class keyword and mostly implemented as constructor function
// Can be used like classes in Java


// Before ES6, Constructor Function
function myClass(a) {
    this.a = a;
    this.myfunc = function() {
        console.log(this.a);
    }
}

// With ES6
class myClassES6 {
    constructor(a) {
        this.a = a;
    }

    myfunc = function() {
        console.log(this.a);
    };
}

let mc = new myClass(1), mc6 = new myClassES6(1);
mc.myfunc();
mc6.myfunc();


class areaCalculator {
    constructor(length, width, radius) {
        this.length = length;
        this.width = width;
        this.radius = radius;
    }

    rectangle = function() {
        return this.length * this.width;
    }

    circle = function() {
        return 3.14 * this.radius * this.radius;
    }
}

let ac = new areaCalculator(2, 3, 4);
console.log(ac.rectangle());
console.log(ac.circle());


// Create a Vaccination class and put methods to book a slot, get price by passing vaccine name, initialize value in the constructor
