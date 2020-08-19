// assert equal FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// count letters FUNCTION IMPLEMENTATION

const countLetters = function(string) {
  const result = {};
  let stringArray = string.split('');
  for (const letters of stringArray) {
    if (letters !== ' ') {
      result[letters] = 0;
    }
  }
  for (const letters of stringArray) {
    if (letters !== ' ') {
      result[letters] += 1;
    }
  }
  return result;
}



console.log(countLetters("maham"));
assertEqual(countLetters("maham")["m"], 2);
assertEqual(countLetters("maham")["a"], 1);
assertEqual(countLetters("maham")["h"], 1);