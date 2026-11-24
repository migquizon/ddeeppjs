console.log("Dynamic Scope");

var teacher = "Poro";

// ask where defined in here
// variable resolution in JavaScript
// works by checking if the reference 
// is it's scope then work it's way up to global
// scope that's why teacher results to Poro 
// and not Suzy
function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  console.log("yo", teacher);
  var teacher = "Suzy";
  console.log("hi", teacher);
  // in dynamically scoped language
  // it asks where the ask function was called? 
  // does it exists in the same scope where the function was called
  // it is dependent where the function was called from
  // but in lexically scoped language
  ask("Why?"); 
}

otherClass();