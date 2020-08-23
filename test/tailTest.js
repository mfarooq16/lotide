const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [maham, adil] for [anam, maham, adil]", () => {
    assert.deepEqual(tail(["anam", "maham", "adil"]), ["maham", "adil"]);
  });


});