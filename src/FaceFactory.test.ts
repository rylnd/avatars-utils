import { FaceFactory } from "./FaceFactory";

describe("FaceFactory", () => {
  describe("given generic parts", () => {
    it("creates the expected face from string parts", () => {
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

    it("creates the expected face from numeric parts", () => {
      const factory = new FaceFactory(
        [1],
        [2],
        [3],
        [4]
      );
      const face = factory.create("");
      const expected = {
        color: 1,
        eyes: 2,
        nose: 3,
        mouth: 4
      }
      expect(face).toEqual(expected);
    });

    it("creates the expected face from object parts", () => {
      const factory = new FaceFactory(
        [{"a": 1}],
        [{"b": 2}],
        [{"c": 3}],
        [{"d": 4}]
      );
      const face = factory.create("");
      const expected = {
        color: {"a": 1},
        eyes: {"b": 2},
        nose: {"c": 3},
        mouth: {"d": 4}
      }
      expect(face).toEqual(expected);
    });
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