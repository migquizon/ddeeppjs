console.log("Hoisting");

// resulting from the two passes
// identifiers and storing 
// execution

function teacher() {
  return "Kyle";
}

var otherTeacher = function () {
  return "huh?";
}

teacher();
otherTeacher();

otherTeacher = function () {
  return "Suzy";
}

// declarations are processed during the first pass
// function declarations are hoisted
// function expressions are only assigned before declaration, cannot be called

{
  teacher = "Kyle";
  let teacher;
}

// var teacher = "Kyle";

{
  console.log(teacher);
  let teacher = "Suzy";
}

// temporal dead zone 
// created to unsure that const or let 
// maintain their single immutable value
// cannot be observed