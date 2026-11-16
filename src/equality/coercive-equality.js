console.log("Coercive Equality");

// abstract equality comparison == (allows coercion)
// strict equality comparison === (does not allow coercion)
// 
// both check types
// but abstract precedes strict after the types match
// in strict, if types don't match, it's false
// in objects, it's the identity 
// === in NaN, false
// === with 0 and -0, true