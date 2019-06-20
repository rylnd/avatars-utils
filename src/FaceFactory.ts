import { Hash, hashFactory, sumAndDiff } from './';

export interface Face<T> {
  color: T;
  eyes: T;
  nose: T;
  mouth: T;
}

export class FaceFactory<T> {
  private colorHash: Hash<T>;
  private eyeHash: Hash<T>;
  private noseHash: Hash<T>;
  private mouthHash: Hash<T>;

  constructor(
    colors: T[],
    eyes: T[],
    noses: T[],
    mouths: T[],
  ) {
    this.colorHash = new Hash(colors);
    this.eyeHash = new Hash(eyes);
    this.noseHash = new Hash(noses);
    this.mouthHash = new Hash(mouths, hashFactory(sumAndDiff));
  }

  public create(string): Face<T> {
    return {
      color: this.colorHash.get(string),
      eyes: this.eyeHash.get(string),
      nose: this.noseHash.get(string),
      mouth: this.mouthHash.get(string),
    };
  }
}