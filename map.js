// FUNCTION IMPLEMENTATION

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

// MAP

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {


  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }


  return results;
};



const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(words, results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);