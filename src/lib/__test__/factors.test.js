const subject = require("../factors");

describe("Factors", () => {
  it("allFactors", () => {
    expect(subject.allFactors(10)).toEqual([1, 2, 5, 10]);
  });
});
