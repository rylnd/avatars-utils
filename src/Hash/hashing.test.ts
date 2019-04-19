import { sumHash } from './hashing';

describe('hashing functions', () => {
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
