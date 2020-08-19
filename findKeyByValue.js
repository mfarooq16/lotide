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







const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);