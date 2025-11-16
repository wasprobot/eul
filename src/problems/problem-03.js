const Primes = require("../lib/primes");

module.exports.run = function (n) {
  let factors = Primes.primeFactors(n);
  return factors;
};
