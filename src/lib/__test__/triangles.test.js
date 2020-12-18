const subject = require("../triangles");

describe("Triangles", () => {
  it("nth triangle number", () => {
    expect(subject.nth(1)).toEqual(1);
    expect(subject.nth(2)).toEqual(3);
    expect(subject.nth(7)).toEqual(28);
  });
});
