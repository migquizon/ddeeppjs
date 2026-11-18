console.log("Custom Types");

type student = { name: string };

function getName(studentRec: student): string {
  return studentRec.name;
}

let firstStudent: student = {
  name: "Rustom"
};

let firstStudentName = getName(firstStudent);

console.log(firstStudentName);