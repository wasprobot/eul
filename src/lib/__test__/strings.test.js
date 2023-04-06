const subject = require("../strings");

describe("Strings", () => {
  it("alphabeticalValue", () => {
    expect(subject.alphabeticalValue("COLIN")).toEqual(53);
    expect(subject.alphabeticalValue("colin")).toEqual(53);
  });
});
