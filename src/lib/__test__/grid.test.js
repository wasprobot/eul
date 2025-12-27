const subject = require("../grid");

describe("Grid", () => {
  it("returns columns", () => {
    expect(subject.columns([[1, 2, 3], [4, 5, 6]])).toEqual([
      [1, 4], [2, 5], [3, 6]
    ]);
  });

  it("returns +diagonals", () => {
    expect(subject.positiveDiags([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]])).toEqual(
        [[1], [4, 2], [7, 5, 3], [8, 6], [9]]
      );
  });

  it("returns -diagonals", () => {
    expect(subject.negativeDiags([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]])).toEqual(
        [[3], [2, 6], [1, 5, 9], [4, 8], [7]]
      );
  });

});
