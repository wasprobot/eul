const Primes = require("../lib/primes");

module.exports.run = function (n) {
  return `The ${n}th prime is:${Primes.nthPrime(n)}`;
};
