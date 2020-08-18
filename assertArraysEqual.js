// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(a, b) {
  let value = true;
  if (a.length !== b.length) {
    value = false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        value = false;
      } else {
        value = true;
      }
    }
  }
  return value;
};

const assertArraysEqual = function(actual, expected) {
  let result = "";
  result = eqArrays(actual, expected);
  if (result) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
assertArraysEqual([2, 4, 6], [2, 4, 8]);
assertArraysEqual([3, 5, 7], [3, 5, 7]);