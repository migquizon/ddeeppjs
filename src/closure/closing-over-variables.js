console.log("Closing Over Variables");

var teacher = "Kyle";

var myTeacher = function () {
  console.log(teacher);
}

teacher = "Suzy";

myTeacher();

//
// 
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
};

// retaining access to the lexical scope environment
// C.O.V.E = Closed Over Variable Environment
// P.L.S.R.D = Persistent Lexically Scoped Referenced Data
