const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [] for [16, 17]", () => {
    assert.deepEqual(middle([16, 17]), []);
  });

  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it("returns [13, 14] for [10, 11, 12, 13, 14, 15, 16, 17]", () => {
    assert.deepEqual(middle([10, 11, 12, 13, 14, 15, 16, 17]), [13, 14]);
  });

});