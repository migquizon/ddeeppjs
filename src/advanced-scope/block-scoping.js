console.log("Block Scoping");

// using blocks or braces

var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher);
}

console.log(teacher);

// var declarations = outer function or global scope
// let declarations = creates a scope specifically within 
// blocks are not auto scopes unless let or const is present
// 
// block - for limiting variable access
// temp variables in if statements, not for the sake of new keyword
// 
// let or const inside a curly braces creates a block scope
// not only the curly braces