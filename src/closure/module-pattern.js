console.log("Module Pattern");

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  }
};

workshop.ask("Is this a module?");

// modules encapsulate data and behavior
// state (data) is held by methods via closure