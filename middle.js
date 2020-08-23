const middle = function(array) {
  let mid = [];
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    let arrayIndex = Math.round((array.length - 1) / 2);
    mid.push(array[arrayIndex]);
  } else {
    let arrayIndexI = Math.floor((array.length - 1) / 2);
    let arrayIndexII = Math.ceil((array.length - 1) / 2);
    mid.push(array[arrayIndexI], array[arrayIndexII]);
  }
  return mid;
};


//
module.exports = middle;