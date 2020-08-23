// assert equal FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

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

/*
console.log(countLetters("maham"));
assertEqual(countLetters("maham")["m"], 2);
assertEqual(countLetters("maham")["a"], 1);
assertEqual(countLetters("maham")["h"], 1);
*/

module.exports = countLetters;