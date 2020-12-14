const Primes = require("../lib/primes");

module.exports.run = function () {
  let factors = Primes.primeFactors(600851475143);
  console.log(factors);
};
