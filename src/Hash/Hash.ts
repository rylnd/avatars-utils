import { sumHash, HashFn } from './hashing';

export class Hash<T> {
  public length: number;
  public values: T[];
  public hashFn: HashFn;

  constructor(values: T[] = [], hashFn = sumHash) {
    this.values = values;
    this.length = values.length;
    this.hashFn = hashFn;
  }

  /**
   * Retrieves one of the constructed values by hashing the provided key.
   * Uniformity of returned values is determined by the hashing function.
   * @param key
   */
  public get(key: string): T {
    const index = this.indexFor(key);
    return this.values[index];
  }

  private indexFor: HashFn = key => {
    const index = this.hashFn(key) % this.length;
    return Math.abs(index);
  };
}
