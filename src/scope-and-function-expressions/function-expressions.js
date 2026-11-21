console.log("Function Expressions");

function createTeacher() { } // function declaration (enclosing scope)

var firstTeacher = function generateTeacher() { // function expression (on it's own scope!)
  console.log("Generate Teacher Function");
  console.log(generateTeacher);
}

console.log(createTeacher);
console.log(firstTeacher);
// console.log(generateTeacher);

firstTeacher();

// prefer the named function expression 
// over the anonymous expression