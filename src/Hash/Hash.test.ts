import { Hash } from '.';

describe('Hash', () => {
  let hash: Hash<string>;

  beforeEach(() => {
    hash = new Hash(['a', 'b', 'c', 'd']);
  });

  it('returns a value given a key', () => {
    expect(hash.get('foo')).toEqual('d');
    expect(hash.get('bar')).toEqual('a');
    expect(hash.get('baz')).toEqual('a');
  });

  it('is consistent', () => {
    for (let i = 0; i < 20; i++) {
      expect(hash.get('foo')).toEqual('d');
    }
  });

  it('returns undefined if given no values', () => {
    const emptyHash = new Hash();

    expect(emptyHash.get('foo')).toBeUndefined();
    expect(emptyHash.get('bar')).toBeUndefined();
    expect(emptyHash.get('baz')).toBeUndefined();
  });
});
