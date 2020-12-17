const Primes = require("../lib/primes");

module.exports.run = function() {
  let sum = 2;
  let candidate = 3;
  let lowerPrimes = [2];

  do {
    if (Primes.isCoprimeToAll(candidate, lowerPrimes)) {
      lowerPrimes.push(candidate);
      sum += candidate;
    }
    candidate += 2;
  } while (candidate < 2000000);

  console.log("The sum of all the primes below two million:", sum);
};
