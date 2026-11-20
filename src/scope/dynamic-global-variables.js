"use strict";

console.log("Dynamic Global Variables");

// let teacher = "Kyle"; // don't allow global scoped "let"
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}

otherClass();

