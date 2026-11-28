console.log("ES6 Modules and Nodes");

var teacher = "Kyle";

export default function ask(question) {
  console.log(teacher, question);
}

// you use the export keyword to make something public, while anything
// not exported remains private
// 
// modules are singletons, only runs once, referencing the same instance