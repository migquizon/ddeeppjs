console.log("Kinds of Emptiness");

// undefined - exists but has no value
// undeclared - never been created
// uninitialized
// 
// typeof can referense a non-existent variable without throwing
// an error

console.log(typeof v); // even though not declared still undefined

// because of historical reasons on JavaScript

let uninitialized;

console.log(typeof uninitialized);