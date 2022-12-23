let subject = require("../primes");
describe("primes", () => {
  it("isCoprimeToAll", () => {
    expect(subject.isCoprimeToAll(4, [2, 3])).toBeFalsy();
    expect(subject.isCoprimeToAll(5, [2, 3])).toBeTruthy();
  });

  describe("isPrime", () => {
    it("1 is not prime", () => {
      let tf = [];
      expect(subject.isPrime(1, tf)).toBeFalsy();
      expect(tf).toEqual([]);
    });

    it("2 is prime", () => {
      let tf = [];
      expect(subject.isPrime(2, tf)).toBeTruthy();
      expect(tf).toEqual([]);
    });

    it("3 is prime", () => {
      let tf = [];
      expect(subject.isPrime(3, tf)).toBeTruthy();
      expect(tf).toEqual([2]);
    });

    it("3 is prime, with tf", () => {
      let tf = [2];
      expect(subject.isPrime(3, tf)).toBeTruthy();
      expect(tf).toEqual([2]);
    });

    it("13 is prime", () => {
      let tf = [];
      expect(subject.isPrime(13, tf)).toBeTruthy();
      expect(tf).toEqual([2, 3, 5, 7, 11]);
    });

    it("13 is prime, with tf", () => {
      let tf = [2, 3, 5, 7, 11];
      expect(subject.isPrime(13, tf)).toBeTruthy();
      expect(tf).toEqual([2, 3, 5, 7, 11]);
    });

    it("209 is not a prime", () => {
      let tf = [];
      expect(subject.isPrime(209, tf)).toBeFalsy();
      expect(tf).toEqual([2, 3, 5, 7, 11]);
    });

    it("209 is not a prime, with tf", () => {
      let tf = [2, 3, 5, 7, 11];
      expect(subject.isPrime(209, tf)).toBeFalsy();
      expect(tf).toEqual([2, 3, 5, 7, 11]);
    });

    it("tests 211", () => {
      let tf = [];
      expect(subject.isPrime(211, tf)).toBeTruthy();
    });
  });

  // describe("nextPrime", () => {
  //   it("nextPrime of 2 is 3", () => {
  //     let tf = [];
  //     expect(subject.nextPrime(2, tf)).toEqual(3);
  //     expect(tf).toEqual([2]);
  //   });
  //   it("nextPrime of 20 is 23", () => {
  //     let tf = [];
  //     expect(subject.nextPrime(20, tf)).toEqual(23);
  //     expect(tf).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  //   });
  //   it("nextPrime of 201 is 211", () => {
  //     let tf = [];
  //     expect(subject.nextPrime(201, tf)).toEqual(211);
  //   });
  // });

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
