const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() using type Function', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });

    it('add 5 and 10', () => {
      assert.strictEqual(calculateNumber('SUM', 5, 10), 15);
    });
    it('add 2 and 2.7', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 2.7), 5);
    });
    it('add 1.0 and 4.0', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 4.0), 5);
    });
    it('add 1.7 and 3.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.7, 3.5), 6);
    });
    it('should return 0 when adding 0.1 and 0.3', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });
    it('add -0.7 and 0.7', () => {
      assert.strictEqual(calculateNumber('SUM', -0.7, 0.7), 0);
    });
    it('add -0.8 and -0.7', () => {
      assert.strictEqual(calculateNumber('SUM', -0.8, -0.7), -2);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });

    it('subtract 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('subtract 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('subtract 1.2 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('subtract 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('subtract 0.1 and 0.3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
    });

    it('subtract -0.7 and 0.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -0.7, 0.7), -2);
    });

    it('subtract -0.8 and -0.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -0.8, -0.7), 0);
    });

    it('subtract 0.8 and -0.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.8, -0.4), 1);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });

    it('divide 1 and 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });

    it('divide 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('divide 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('divide 1.6 and 2.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, 2.4), 1);
    });

    it('divide 4.2 and 1.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.2, 1.5), 2);
    });

    it('divide 1.3 and 0.3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
    });

    it('divide -0.7 and 0.7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -0.7, 0.7), -1);
    });

    it('divide -0.8 and -0.7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -0.8, -0.7), 1);
    });

    it('divide -44.5 and 2.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -44.5, 2.4), -22);
    });

    it('divide -88.5 and -3.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -88.5, -3.6), 22);
    });
  });
});
