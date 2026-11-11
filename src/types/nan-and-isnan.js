console.log("NaN and isNaN");

// NaN - not a number, sentil wwhich is a number
// indicating an invalid numeric operation

let age = Number("0o46");
console.log(age);

age = Number("n/a");
console.log(age);
console.log(age === age); // NaN === NaN false // an invalid number
console.log(isNaN(age)); // coerces to numbers
console.log(Number.isNaN(age)); // checks the value without coercion