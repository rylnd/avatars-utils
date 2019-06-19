import { FaceFactory } from "./FaceFactory";

describe("FaceFactory", () => {
  it("creates the expected face from singular parts", () => {
    const factory = new FaceFactory(
      ["onlyColor"],
      ["onlyEyes"],
      ["onlyNose"],
      ["onlyMouth"]
    );
    const face = factory.create("");
    const expected = {
      color: "onlyColor",
      eyes: "onlyEyes",
      nose: "onlyNose",
      mouth: "onlyMouth"
    }
    expect(face).toEqual(expected);
  });

  describe("given a choice of parts", () => {
    const colors = ["colorA", "colorB"];
    const eyes = ["eyesA", "eyesB"];
    const noses = ["noseA", "noseB"];
    const mouths = ["mouthA", "mouthB"];

    const factory = new FaceFactory(
      colors,
      eyes,
      noses,
      mouths
    );

    it("creates a face from the choices", () => {
      const face = factory.create("");
      
      expect(colors).toContain(face.color);
      expect(eyes).toContain(face.eyes);
      expect(noses).toContain(face.nose);
      expect(mouths).toContain(face.mouth);
    });

    it("creates a different face given a different string", () => {
      const face1 = factory.create("a");
      const face2 = factory.create("b");
      
      expect(face1).not.toEqual(face2);
    });

    it("creates the same face given the same string", () => {
      const sameString = "myFace";
      const face1 = factory.create(sameString);
      const face2 = factory.create(sameString);
      
      expect(face1).toEqual(face2);
    });
  });
});