console.log("Double Equals Algorithm");

// checks if matching the Types
// if not, coerce
//  - null undefined true (both direction)
//  - string number , coerce toNumber
// toNumber to Boolean
// then if both are NaN, return false
// if either side is 0, -0, return true
// return false
// getting it to primitive
// toPrimitive toString toNumber toBoolean
// To compare two primitives of the same type or coercively
// equal primitives
// corner cases
// [] == []
// //
// 
// console.log([] !== []);
// console.log([] == []);
// console.log([] === []);
// empty array, truthy
// corner cases for Boolean
// avoid
// 1. == with 0 or "" or even " "
// 2. == with non-primitives
// 3. == true or == false : allow ToBoolean