console.log("Compilation and Scope");

let teacher = "Mika";

function otherClass() {
  let teacher = "Pau";
  console.log("Welcome!");
}

function ask() {
  let question = "Why?";
  console.log(question);
}

otherClass();
ask();