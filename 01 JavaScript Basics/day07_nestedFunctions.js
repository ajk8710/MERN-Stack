// Nested functions do hold the scope of outer-functions variables or properties 
// Javascript currying

var e = 15; // global scope 

function sum1(a) {

  return function sum2(b){

    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var outPut = sum1(5)(4)(3)(2);
console.log(outPut);

var sm2 = sum1(5);
var sm3 = sm2(4);
var sm4 = sm3(3);
var smOutput = sm4(2);
console.log(smOutput);
