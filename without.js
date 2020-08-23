const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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


/*
assertArraysEqual(without([1, 2, 3],[2, 3]), [1]);
assertArraysEqual(without([2, 4, 6],[2, 4]), [1]);
assertArraysEqual(without([3, 5, 7],[7]), [3, 5]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/


module.exports = without;