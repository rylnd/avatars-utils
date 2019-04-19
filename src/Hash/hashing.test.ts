import { sumHash, hashFactory } from './hashing';

describe('hashing functions', () => {
  describe('hashFactory', () => {
    it('converts a string to an integer by reducing its charCodes and adding its length', () => {
      const reduceTo1 = (arr: number[]) => 1;
      const charCodeSum = hashFactory(reduceTo1);

      expect(charCodeSum('foo')).toEqual(1 + 'foo'.length);
    });
  });

  describe('sumHash', () => {
    it('returns 0 for an empty string', () => {
      expect(sumHash('')).toEqual(0);
    });

    it('converts a string into an integer by summing its charCodes', () => {
      expect(sumHash('foo')).toEqual(327);
    });

    it('is consistent', () => {
      for (let i = 0; i < 20; i++) {
        expect(sumHash('foobarbaz')).toEqual(959);
      }
    });
  });
});
