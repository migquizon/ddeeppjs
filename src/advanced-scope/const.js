console.log("const");

// const - can't be reassigned
// does not prevent mutation value

var teacher = "Suzy";
teacher = "Kyle";

const myTeacher = teacher;
// myTeacher = "Suzy";

const teachers = ["Kyle", "Suzy"];
teachers[1] = "Brian";

console.log(teachers);

// const for immutable primitive values
// Object.freeze - read only lock on properties but not deep freeze