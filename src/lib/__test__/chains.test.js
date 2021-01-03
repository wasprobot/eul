const subject = require("../chains");

describe("Chains", () => {
  describe("collatz", () => {
    it("starting at 1", () => expect(subject.collatz(1)).toEqual([1]));
    it("starting at 13", () => expect(subject.collatz(13)).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]));
  });
});
