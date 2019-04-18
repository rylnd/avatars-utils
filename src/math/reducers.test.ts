import { product, sum, sumAndDiff } from '.';

describe('hashing', () => {
  describe('sum', () => {
    it('reduces an empty array to 0', () => {
      expect(sum([])).toEqual(0);
    });

    it('reduces an array to an integer', () => {
      expect(sum([1, 2, 3])).toEqual(6);
    });
  });

  describe('product', () => {
    it('reduces an empty array to 1', () => {
      expect(product([])).toEqual(1);
    });

    it('reduces an array to an integer', () => {
      expect(product([1, 2, 3, 4])).toEqual(24);
    });
  });

  describe('sumAndDiff', () => {
    it('reduces an empty array to 1', () => {
      expect(sumAndDiff([])).toEqual(0);
    });

    it('reduces an array to an integer', () => {
      expect(sumAndDiff([1, 2, 3, 4])).toEqual(-2);
    });
  });
});
