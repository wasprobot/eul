const subject = require("../geometric");

describe("Geometric", () => {
  it("Triangles", () => {
    expect(subject.triangle(1)).toEqual(1);
    expect(subject.triangle(2)).toEqual(3);
    expect(subject.triangle(7)).toEqual(28);
  });
  it("Squares", () => {
    expect(subject.square(1)).toEqual(1);
    expect(subject.square(2)).toEqual(4);
    expect(subject.square(7)).toEqual(49);
  });
  it("Pentagonal", () => {
    expect(subject.pentagonal(1)).toEqual(1);
    expect(subject.pentagonal(2)).toEqual(5);
    expect(subject.pentagonal(7)).toEqual(70);
  });
  it("Hexagonal", () => {
    expect(subject.hexagonal(1)).toEqual(1);
    expect(subject.hexagonal(2)).toEqual(6);
    expect(subject.hexagonal(7)).toEqual(91);
  });
});

