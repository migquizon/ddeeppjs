console.log("Function Scoping");

var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher);
}

console.log(teacher);

// least exposure or least privilege
// defaulting to private, exposing what is minimal necessary
// prevents naming collision, misuse 
// allows easier future refactoring
// 
// 