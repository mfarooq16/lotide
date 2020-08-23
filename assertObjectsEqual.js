// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require('./eqObjects');

// assertObjectsEquals FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = "";
  result = eqObjects(actual, expected);
  if (result) {
    console.log(`✔✔✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc); // Pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // Fail
*/

module.exports = assertObjectsEqual;