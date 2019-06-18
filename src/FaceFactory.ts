import { Hash, hashFactory, sumAndDiff } from './';

export interface Face {
  color: string;
  eyes: string;
  nose: string;
  mouth: string;
}

export class FaceFactory {
  private colorHash: Hash<string>;
  private eyeHash: Hash<string>;
  private noseHash: Hash<string>;
  private mouthHash: Hash<string>;

  constructor(
    colors: string[],
    eyes: string[],
    noses: string[],
    mouths: string[],
  ) {
    this.colorHash = new Hash(colors);
    this.eyeHash = new Hash(eyes);
    this.noseHash = new Hash(noses);
    this.mouthHash = new Hash(mouths, hashFactory(sumAndDiff));
  }

  public create(string): Face {
    return {
      color: this.colorHash.get(string),
      eyes: this.eyeHash.get(string),
      nose: this.noseHash.get(string),
      mouth: this.mouthHash.get(string),
    };
  }
}