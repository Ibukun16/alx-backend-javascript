const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 5.0), 7);
  });

  it("rounding of a's floating point fraction number", () => {
    assert.strictEqual(calculateNumber(15.78, 2), 18);
    assert.strictEqual(calculateNumber(1.2, 0), 1);
    assert.strictEqual(calculateNumber(3.5, 2), 6);
  });

  it("rounding down b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(4.0, 2.4), 6);
    assert.strictEqual(calculateNumber(2, 15.38), 17);
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(2, 3.4), 5);
  });

  it("rounding down a and b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(3.2, 5.4), 8);
  });

  it("rounding up b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it("rounding up a and b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(3.6, 1.5), 6);
  });

  it("rounding up a's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(5.9, 2.5), 9);
  });

  it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
