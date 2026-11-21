console.log("Nested Scope");

let teacher = "Sarah";

function otherClass() {
  // var teacher = "Marian";

  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
}

otherClass();
ask("Hey!");