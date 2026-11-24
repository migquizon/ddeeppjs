console.log("IIFE Pattern");

var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
})();

console.log(teacher);

// immediately invoked function expression, a pattern used to
// create a scope that runs once and then goes away
//
// creates a scope without polluting the enclosing scope and
// allows running a function just once
//
// turning statement to expression such as try and catch 

var test = (function () {
  try {
    
  } catch {
    
  }
})();