// If my key value (that i am reading from any variable) are same, then instead of having both of them we can have only one

// If we put comma, we don't need to use let again and it will continue as let till semicolon ;
// (this also works in Java)
let cat = "meow",
dog = "woof",
bird= "chrip",
lion = "roar";

// long hand
let animalSounds = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
}

// short hand
let animalSoundsES6 = { cat, dog, bird, lion }

// console.log accepts comma(,) to print object
// Animal Sounds are represented as - { cat: 'meow', dog: 'woof', bird: 'chrip', lion: 'roar' }
console.log("Animal Sounds are represented as -", animalSounds);
console.log("Animal Sounds are represented as -", animalSoundsES6);

// if you use string concatenation, animalSoundsES6.tostring() is called then evaluates to [object Object]
// Animal Sounds are represented as - [object Object]
console.log("Animal Sounds are represented as - " + animalSoundsES6); 

// use JSON.stringify when concatenating
// Animal Sounds are represented as - Legacy Way {"cat":"meow","dog":"woof","bird":"chrip","lion":"roar"}
console.log("Animal Sounds are represented as - Legacy Way " + JSON.stringify(animalSoundsES6));


module.exports = {animalSounds, animalSoundsES6};
