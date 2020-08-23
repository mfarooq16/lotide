// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const findKeyByValue = require('./findKeyByValue')

//findKey

const findKey = function(object, callback) {
  let result1 = "";
  for (let key in object) {
    if (callback(object[key])) {
      result1 = key;
      break;
    }
  }
  return result1;
};

/*
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"
*/

module.exports = findKey;