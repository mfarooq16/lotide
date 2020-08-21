// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(object, value) {
  let result = "";
  
  for (let key in object) {
    if (object[key] === value) {
      result = key;
    } else {
      result = undefined;
    }
  }
  return result;
};


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


//TEST
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"
