console.log("typeof Operator");

let v; // undefined don't have a value yet
console.log(typeof v);

v = Symbol();
console.log(typeof v);

v = {};
console.log(typeof v);

v = null;
console.log(typeof v);

v = [];
console.log(typeof v);
console.log(Array.isArray(v));

console.log(typeof notExistent);

v = function () { };
console.log(typeof v);