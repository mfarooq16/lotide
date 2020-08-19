// FUNCTION IMPLEMENTATION
const eqArrays = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a.length !== b.length) {
      return false;
    } else if (a[i] !== b[i]) {
      return false;
    } else {
      return true;
    }
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const inspect = require('util').inspect;


  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};


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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc); // Pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // Fail
