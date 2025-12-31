const subject = require("../digits");

describe("Digits", () => {
  describe("digits", () => {
    it("returns the digits for 89", () => {
      const result = Array.from(subject.digits(89));
      expect(result).toEqual([8, 9]);
    })

    it("returns the digits for 0", () => {
      const result = Array.from(subject.digits(0));
      expect(result).toEqual([0]);
    })

    it("returns the digits for 10", () => {
      const result = Array.from(subject.digits(10));
      expect(result).toEqual([1, 0]);
    })

    it("returns the digits for 10000", () => {
      const result = Array.from(subject.digits(10000));
      expect(result).toEqual([1, 0, 0, 0, 0]);
    })

    it("returns the digits for 809", () => {
      const result = Array.from(subject.digits(809));
      expect(result).toEqual([8, 0, 9]);
    })
  })

  describe("words", () => {
    it("ones", () => {
      expect(subject.words(0)).toEqual("zero");
      expect(subject.words(5)).toEqual("five");
      expect(subject.words(9)).toEqual("nine");
    });

    describe("tens", () => {
      expect(subject.words(10)).toEqual("ten");
      expect(subject.words(80)).toEqual("eighty");
      expect(subject.words(90)).toEqual("ninety");

      it("teens", () => {
        expect(subject.words(11)).toEqual("eleven");
        expect(subject.words(19)).toEqual("nineteen");
      });

      it("tens+ones", () => {
        expect(subject.words(25)).toEqual("twenty five");
        expect(subject.words(39)).toEqual("thirty nine");
      });
    });

    describe("hundreds", () => {
      expect(subject.words(100)).toEqual("one hundred");
      expect(subject.words(700)).toEqual("seven hundred");

      it("with ones", () => {
        expect(subject.words(205)).toEqual("two hundred and five");
        expect(subject.words(501)).toEqual("five hundred and one");
      });

      it("with teens", () => {
        expect(subject.words(215)).toEqual("two hundred and fifteen");
        expect(subject.words(511)).toEqual("five hundred and eleven");
      });

      it("with tens", () => {
        expect(subject.words(250)).toEqual("two hundred and fifty");
        expect(subject.words(550)).toEqual("five hundred and fifty");
      });
    });

    describe("powers of thousand", () => {
      expect(subject.words(1000)).toEqual("one thousand");
      expect(subject.words(5000)).toEqual("five thousand");
      expect(subject.words(6000000)).toEqual("six million");
      expect(subject.words(7000000000)).toEqual("seven billion");
      expect(subject.words(8000000000000)).toEqual("eight trillion");

      it("sum of perfect powers of 1000", () => {
        expect(subject.words(8007006005000)).toEqual("eight trillion seven billion six million five thousand");
      });

      it("with hundreds", () => {
        expect(subject.words(7600)).toEqual("seven thousand six hundred");
        expect(subject.words(700600)).toEqual("seven hundred thousand six hundred");
      })

      it("with hundreds and tens", () => {
        expect(subject.words(7610)).toEqual("seven thousand six hundred and ten");
        expect(subject.words(700611)).toEqual("seven hundred thousand six hundred and eleven");
      })

      it("with hundreds and ones", () => {
        expect(subject.words(7601)).toEqual("seven thousand six hundred and one");
        expect(subject.words(700601)).toEqual("seven hundred thousand six hundred and one");
      })

      it("with hundreds, tens and ones", () => {
        expect(subject.words(7641)).toEqual("seven thousand six hundred and forty one");
        expect(subject.words(666666)).toEqual("six hundred sixty six thousand six hundred and sixty six");
        expect(subject.words(1234567890)).toEqual("one billion two hundred thirty four million five hundred sixty seven thousand eight hundred and ninety");
      })

    });
  })
});
