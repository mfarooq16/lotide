

// eqArrays FUNCTION IMPLEMENTATION
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

// assertArraysEqual FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  let result = "";
  result = eqArrays(actual, expected);
  if (result) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// without FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  let finalArray = [];
  let outcome = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        outcome = true;
      }
    }
    if (outcome === false) {
      finalArray.push(source[i]);
    }
    outcome = false;
  }
  return finalArray;
};


// TEST CODE


assertArraysEqual(without([1, 2, 3],[2, 3]), [1]);
assertArraysEqual(without([2, 4, 6],[2, 4]), [1]);
assertArraysEqual(without([3, 5, 7],[7]), [3, 5]);



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);