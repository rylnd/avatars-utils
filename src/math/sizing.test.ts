import { ParseSizeFn, parseSizeFactory } from '.';

describe('imager', () => {
  describe('parseSize', () => {
    let parseSize: ParseSizeFn;

    beforeEach(() => {
      parseSize = parseSizeFactory(40, 400);
    });

    it('defaults to 400x400', () => {
      expect(parseSize()).toEqual({ height: 400, width: 400 });
      expect(parseSize('')).toEqual({ height: 400, width: 400 });
      expect(parseSize('0')).toEqual({ height: 400, width: 400 });
    });

    it('sets a square if one size is specified', () => {
      expect(parseSize('50')).toEqual({ height: 50, width: 50 });
    });

    it('clamps to 40 if smaller', () => {
      expect(parseSize('10x50')).toEqual({ height: 50, width: 40 });
      expect(parseSize('100x20')).toEqual({ height: 40, width: 100 });
    });

    it('clamps to 400 if bigger', () => {
      expect(parseSize('500')).toEqual({ height: 400, width: 400 });
      expect(parseSize('500x200')).toEqual({ height: 200, width: 400 });
      expect(parseSize('100x500')).toEqual({ height: 400, width: 100 });
    });
  });
});
