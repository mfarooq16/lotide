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

// TAKE UNTIL

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);