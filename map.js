// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

// MAP
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/*
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(words, results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
*/

module.exports = map;
