console.log("Naming Function Expressions");

// reliable function self-reference
// more debuggable stack traces
// more self documentings
//

let numArr = [3, 4, 55, 67, 0];

const logNumArr = function iterateNumArr(item) {
  console.log(item);
}

numArr.forEach(logNumArr);