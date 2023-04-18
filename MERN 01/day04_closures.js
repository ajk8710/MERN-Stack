// Closures: encapsulation - public, private, protected ...
// When there is a function parent which has a child function that returns parent data and hides some of it,
// this phenomenon is termed as closures

function Account(acctNum, acctName, acctType) {
    var firstName = "Alex";
    var acctNum = acctNum;
    var acctName = acctName;
    var acctType = acctType;

    // return {
        // firstName : firstName //if key name and the variable to which it refers are same we can use only one of it
        // firstName
    // }

    function Child(isAdmin) {
        if (isAdmin) {
            return {
                firstName,
                acctNum,
                acctName,
                acctType
            }
        } else {
            return {
                firstName,
                acctName,
            }   
        }
    }

    return Child;
}

var accObj = Account(12345, "Scotia Bank", "Credit");
console.log(accObj(true));
console.log(accObj(false));
