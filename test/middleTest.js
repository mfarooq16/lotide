const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST
console.log("middle([16, 17])", middle([16, 17])); // []
console.log("middle([1, 2, 3, 4, 5, 6, 7])", middle([1, 2, 3, 4, 5, 6, 7])); // [4]

assertArraysEqual(middle([10, 11, 12, 13, 14, 15, 16, 17]), [13, 14]);
