console.log("Coercion Exercise");

function isValidName(name) {
  // must be a string
  // must be non-empty
  // must contain non-whitespace of at least 3 characters
  // 
  if (typeof name === "string" && name.trim().length >= 3) {
    return true;
  }
  return false;
}

console.log(isValidName(9));