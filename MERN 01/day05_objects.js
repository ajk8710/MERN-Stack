// Objects are reference type and is the top level of heirarchy in javascript
// Object class is used like a class to get features like: inheritance and polymorphims

var Employee = {
    EmpName : "David",
    EmpID : 1,
    getEmployeeDetail : function () {
        return this.EmpName + " " + this.EmpID +  " " + this.Specialist; // without 'this', it's not defined error
    }
}

// console.log(Employee.getEmployeeDetail());


// 1. One way to create object in js is by using new keyword
// I am copying the Employee references to SE
var SoftwareEng = new Object(Employee);

SoftwareEng.Specialist = "MERNStack"; // this is updating Employee as well.

// console.log(Employee.getEmployeeDetail());
// console.log(SoftwareEng.getEmployeeDetail());


// 2. By using create method of object we can create clone of parent

var SoftwareEng = Object.create(Employee);

SoftwareEng.EmpName = "Tien";

SoftwareEng.Specialist = "MERNStack2";

console.log(Employee.getEmployeeDetail());
console.log(SoftwareEng.getEmployeeDetail());


// Overriding happens here
SoftwareEng.getEmployeeDetail = function () {
    return this.EmpName +" "+ this.EmpID +" " + this.Specialist + " " + this.pokemon;
}

SoftwareEng.pokemon = "Pikachu";

console.log(Employee.getEmployeeDetail());
console.log(SoftwareEng.getEmployeeDetail());


// Practice Example
var Animal = {
    specie : "Mammel",
    habitat : "Sabana",
    getInfo: function () {
      return "Specie : " + this.specie + ", Habitat: " + this.habitat;
    }
}

var Dog = Object.create(Animal);
Dog.habitat = "Home";
Dog.speak = "Woof";
Dog.getInfo = function () {
        return "Specie : " + this.specie + ", Habitat: " + this.habitat + ", Speaks " + this.speak;
    }

console.log(Animal.getInfo());
console.log(Dog.getInfo());


// 3. Merging objects

var obj1 = {name : "Tien", age : 29, salary : 250};
var obj2 = {name : "Garrick", address:"New City ", skills : "Javascript"};
var obj3 = {name : "David", session:"MERNStack"};

var obj4 = {obj1, obj2, obj3}; // This simply creates an object with var obj1, obj2, obj3
// console.log(obj4);

// Object.assign copies properties from sources to target
var obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj4);


// 4. Even the empty object will have prototype (parent, similar to Object class of Java)

var emptyObj = {} // Object.create({})
console.log(emptyObj.__proto__);


// 5. If we wish to break the prototype chain
// you need to pass null in your object create constructor

var objWithNullProtoype =  Object.create(null);
console.log(objWithNullProtoype.__proto__);
