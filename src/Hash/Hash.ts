import { sum } from '../math';

export class Hash<T> {
  public length: number;
  public values: T[];
  public hashFn: (array: number[]) => number;

  constructor(values: T[] = [], hashFn = sum) {
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

  private indexFor(key: string): number {
    const charArray = key.split('');
    const intArray = charArray.map(this.getCharInt);
    const index = (this.hashFn(intArray) + intArray.length) % this.length;
    return Math.abs(index);
  }

  private getCharInt(char: string) {
    return Number(char.charCodeAt(0)) || 0;
  }
}
