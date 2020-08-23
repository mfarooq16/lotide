// FUNCTION IMPLEMENTATION

const tail = function(array) {
  array.splice(0,1);
  return array;
};

module.exports = tail;