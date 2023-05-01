// Filter, Map, Some, Reduce are Iterators
// are advanced iterators, always give us a shallow copy of data present and 
// maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SuperMan"},
    {id : 6, name : "Robin", savedby : "Thor"}
];

// 1. Give me the list of persons saved by Captain America

// The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

let prsnSavedByCA = personsList.filter(prsnObj => prsnObj.savedby==="CaptainAmerica");

console.log(prsnSavedByCA);
console.log(personsList);  // this will not change - so preserving the immutability

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
// If boolean test is passed, then True/False.  If expression is passed, then result of expression
let prsnSavedByCA2 = personsList.map(theElements => theElements.savedby==="CaptainAmerica");
console.log(prsnSavedByCA2);  // this is [ true, false, true, false, false, false ]


// 2. Give me the list of names saved by IronMan

let prsnSavedByIronM = personsList.map(forEachObj => forEachObj.savedby==="IronMan" ? forEachObj.name : "").filter(p => p!="");

console.log(prsnSavedByIronM);

prsnSavedByIronM = personsList.map(prsnObj => {
                            if (prsnObj.savedby==="IronMan")
                                return {"Saved Person" : prsnObj.name}
                                else
                                return ""}).filter(p => p!="");
console.log(prsnSavedByIronM);


// 3. If there is one person saved by SpiderMan / SuperMan

// The some() method tests whether at least one element in the array passes the test implemented by the provided function

let savdBySpiderMan = personsList.some(prsn => prsn.savedby == "SpiderMan");
let savdBySuperMan = personsList.some(prsn => prsn.savedby == "SuperMan");
console.log(savdBySpiderMan);  // false
console.log(savdBySuperMan);   // true


//4. Count the number of persons saved by each super hero

let persnCount = personsList.reduce((prevVal, currValue) => {
    
    // set[HeroName:NumSaved]    if undefined - evaluates to false - assigns 1
    prevVal[currValue.savedby] = prevVal[currValue.savedby] ? prevVal[currValue.savedby]+1 : 1;
    
    return prevVal;  // keep using the same set
}, new Set());  // initializing the pervious value to a set

console.log(persnCount);


// Question:

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

// 1. List the person with javascript tag
// 2. List the person using java - add programmer after their name, change the key from "name" to "Developer"
// 3. If we have anyone with tag python
// 4. Find the number of unique tags and their count present
