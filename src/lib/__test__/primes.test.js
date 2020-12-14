let subject = require("../primes");
describe("primes", () => {
  it("isCoprimeToAll", () => {
    expect(subject.isCoprimeToAll(4, [2, 3])).toBeFalsy();
    expect(subject.isCoprimeToAll(5, [2, 3])).toBeTruthy();
  });

  describe("isPrime", () => {
    it("tests 1", () => {
      let tf = [];
      expect(subject.isPrime(1, tf)).toBeFalsy();
      expect(tf).toEqual([]);
    });

    it("tests 2", () => {
      let tf = [];
      expect(subject.isPrime(2, tf)).toBeTruthy();
      expect(tf).toEqual([]);
    });

    it("tests 3", () => {
      let tf = [];
      expect(subject.isPrime(3, tf)).toBeTruthy();
      expect(tf).toEqual([2]);
    });

    it("tests 3 with tf", () => {
      let tf = [2];
      expect(subject.isPrime(3, tf)).toBeTruthy();
      expect(tf).toEqual([2]);
    });

    it("tests 13", () => {
      let tf = [];
      expect(subject.isPrime(13, tf)).toBeTruthy();
      expect(tf).toEqual([2, 3, 5, 7, 11]);
    });

    it("tests 13 with tf", () => {
      let tf = [2, 3, 5, 7, 11];
      expect(subject.isPrime(13, tf)).toBeTruthy();
      expect(tf).toEqual([2, 3, 5, 7, 11]);
    });

    it("tests 209", () => {
      let tf = [];
      expect(subject.isPrime(209, tf)).toBeFalsy();
      console.log({ tf });
      //   expect(tf).toEqual([2, 3, 5, 7, 11]);
    });

    // it("tests 211", () => {
    //   let tf = [];
    //   expect(subject.isPrime(211, tf)).toBeTruthy();
    //   console.log({ tf });
    //   //   expect(tf).toEqual([2, 3, 5, 7, 11]);
    // });
  });

  //   it("nextPrime of 2", () => {
  //     let tf = [];
  //     expect(subject.nextPrime(2, tf)).toEqual(3);
  //     expect(tf).toEqual([2]);
  //   });

  //   it("nextPrime of 20", () => {
  //     let tf = [];
  //     expect(subject.nextPrime(20, tf)).toEqual(22);
  //     expect(tf).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  //   });

  //   it("nextPrime of 201", () => {
  //     let tf = [];
  //     expect(subject.nextPrime(201, tf)).toEqual(211);
  //   });

  //   it("primeFactors", () => {
  //     expect(subject.primeFactors(2)).toEqual([2]);
  //     expect(subject.primeFactors(3)).toEqual([3]);
  //     expect(subject.primeFactors(6)).toEqual([2, 3]);
  //     expect(subject.primeFactors(203)).toEqual([7, 29]);
  //     expect(subject.primeFactors(13195)).toEqual([5, 7, 13, 29]);
  //   });

  //   it("nth prime", () => {
  //     expect(subject.nthPrime(1)).toEqual(2);
  //     expect(subject.nthPrime(2)).toEqual(3);
  //     expect(subject.nthPrime(6)).toEqual(13);
  //   });
});
