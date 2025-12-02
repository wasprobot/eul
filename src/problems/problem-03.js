const Primes = require("../lib/primes");

module.exports.run = function (n) {
  let factors = Primes.uniquePrimeFactors(n);
  return factors;
};
