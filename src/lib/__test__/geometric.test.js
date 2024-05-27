const subject = require("../geometric");

describe("Geometric", () => {
  it("Triangles", () => {
    expect(subject.triangle(1)).toEqual(1);
    expect(subject.triangle(2)).toEqual(3);
    expect(subject.triangle(7)).toEqual(28);
  });
});

