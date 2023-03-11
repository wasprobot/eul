let subject = require("../time");
describe("time", () => {
  it("shifts", () => {
    expect(subject.shifts(2023, 1, 1)).toEqual(1);
  });
});
