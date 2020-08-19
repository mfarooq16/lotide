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

const middle = function(array) {
  let mid = [];
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    let arrayIndex = Math.round((array.length - 1) / 2);
    mid.push(array[arrayIndex]);
  } else {
    let arrayIndexI = Math.floor((array.length - 1) / 2);
    let arrayIndexII = Math.ceil((array.length - 1) / 2);
    mid.push(array[arrayIndexI], array[arrayIndexII]);
  }
  return mid;
};

// TEST
console.log("middle([16, 17])", middle([16, 17])); // []
console.log("middle([1, 2, 3, 4, 5, 6, 7])", middle([1, 2, 3, 4, 5, 6, 7])); // [4]

assertArraysEqual(eqArrays(middle([10, 11, 12, 13, 14, 15, 16, 17]), [13, 14]), true);