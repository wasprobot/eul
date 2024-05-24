const subject = require("../arithmetic");

describe("Arithmetic", () => {
  it("times10", () => {
    expect(subject.times10("0")).toEqual("0");
    expect(subject.times10("00")).toEqual("0");
    expect(subject.times10("23")).toEqual("230");
    expect(subject.times10("2")).toEqual("20");
  });
  it("timesPower10", () => {
    expect(subject.timesPower10("0", 10)).toEqual("0");
    expect(subject.timesPower10("00", 10)).toEqual("0");
    expect(subject.timesPower10("23", 10)).toEqual("230000000000");
    expect(subject.timesPower10("2", 100000).length).toEqual(100001);
  });
  it("add", () => {
    expect(subject.add("23", "1")).toEqual("24");
    expect(subject.add("2", "99")).toEqual("101");
    expect(subject.add("23", "77")).toEqual("100");
    expect(subject.add("523", "577")).toEqual("1100");
    expect(subject.add("5231771661771665556272883632552424", "2")).toEqual("5231771661771665556272883632552426");
    expect(subject.add("52311872002932873730098098726255255253897874320488484848004948662442527383771661771665556272883632552424", "2"))
      .toEqual("52311872002932873730098098726255255253897874320488484848004948662442527383771661771665556272883632552426");
    expect(subject.add("3", "52311872002932873730098098726255255253897874320488484848004948662442527383771661771665556272883632552424"))
      .toEqual("52311872002932873730098098726255255253897874320488484848004948662442527383771661771665556272883632552427");
  });
  it("multiply", () => {
    expect(subject.multiply("0", "0")).toEqual("0");
    expect(subject.multiply("2", "0")).toEqual("0");
    expect(subject.multiply("02", "0")).toEqual("0");
    expect(subject.multiply("2", "3")).toEqual("6");
    expect(subject.multiply("12", "3")).toEqual("36");
    expect(subject.multiply("529", "36")).toEqual("19044");
    expect(subject.multiply("12", "12")).toEqual("144");
    expect(subject.multiply("773636637736", "188277237").length).toEqual(21);
    expect(subject.multiply("49874598754975439574773636637736", "49874598754975439574773636637736").length).toEqual(64);
  });
  it("power", () => {
    expect(subject.power("0", "0")).toEqual("1");
    expect(subject.power("2", "0")).toEqual("1");
    expect(subject.power("2", "3")).toEqual("8");
    expect(subject.power("3", "4")).toEqual("81");
  });
  it("strip", () => {
    expect(subject.strip("00")).toEqual("0");
    expect(subject.strip("23")).toEqual("23");
    expect(subject.strip("0023")).toEqual("23");
  })
  it("compare", () => {
    expect(subject.compare("123", "99")).toEqual(1);
    expect(subject.compare("99", "100")).toEqual(-1);
    expect(subject.compare("99", "99")).toEqual(0);
    expect(subject.compare("99", "39")).toEqual(1);
    expect(subject.compare("29", "99")).toEqual(-1);
    expect(subject.compare("23", "20")).toEqual(1);
  })
  it("subtract", () => {
    expect(subject.subtract("23", "20")).toEqual("3");
    expect(subject.subtract("9", "50")).toEqual("-41");
    expect(subject.subtract("23", "25")).toEqual("-2");
    expect(subject.subtract("203", "99")).toEqual("104");
    expect(subject.subtract("2003", "99")).toEqual("1904");
    expect(subject.subtract("154617233140502689077100", "138564064605510183482106")).toEqual("16053168534992505594994");
    expect(subject.subtract("987438763636009884747000993826144", "138564064605510000183482106")).toEqual("987438625071945279237000810344038");
  })
});
