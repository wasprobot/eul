const Primes = require("../lib/primes");

module.exports.run = function () {
  console.log("The 10001th prime is:", Primes.nthPrime(10001));
};
