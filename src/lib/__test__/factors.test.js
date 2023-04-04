const subject = require("../factors");

describe("Factors", () => {
  it("allDivisors", () => {
    expect(subject.allDivisors(10)).toEqual([1, 2, 5]);
  });

  it("allFactors", () => {
    expect(subject.allFactors(10)).toEqual([1, 2, 5, 10]);
  });

  it("sumOfDivisors", () => {
    expect(subject.sumOfDivisors(10)).toEqual(1 + 2 + 5);
  });
});
