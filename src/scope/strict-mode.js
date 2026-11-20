"use strict";

var teacher = "Kyle";
let topic = "Initial";

function otherClass() {
  teacher = "Suzy";
  topic = "Strict Mode";
  console.log("Welcome!");
}

otherClass();
console.log(topic);