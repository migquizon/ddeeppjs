console.log("Arrow Functions");

let persons = [
  {
    id: 2,
    name: "Lee"
  },
  {
    id: 3,
    name: "Ri"
  },
  {
    id: 4,
    name: "Dee"
  }
];

let ids = persons.map(person => person.id);
console.log(ids);

let idsArr = persons.map(function getId(person) {
  return person.id;
});
console.log(idsArr);