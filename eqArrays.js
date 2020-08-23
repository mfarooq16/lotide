// FUNCTION IMPLEMENTATION

const eqArrays = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a.length !== b.length) {
      return false;
    } else if (a[i] !== b[i]) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = eqArrays;