console.log("Choosing let or var");

function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }

  return result;
}

function lookupRecord(searchStr) {
  try {
    var id = getRecord(searchStr);
  } catch (err) {
    var id = -1;
  }

  return id;
}

// use var as an intent to be used in the function, a broader scope
// var can be declared multiple times, let can't be
// let auto block scopes itself within try-catch
// var in redeclaring in long function, makes it clear and broad