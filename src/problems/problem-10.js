const Primes = require("../lib/primes");

module.exports.run = function () {
  let sum = 0;
  let prime = 2;
  do {
    console.log({ prime });
    sum += prime;
    prime = Primes.nextPrime(prime);
  } while (prime < 2000000);

  console.log("The sum of all the primes below two million:", sum);
};
