const cliProgress = require('cli-progress');
const Primes = require("../lib/primes");

module.exports.run = function (n) {
  let arg = n;
  let primes = [2, 3];
  n -= 2;

  p = 3;
  while (n--) {
    p = Primes.nextPrime(p, primes);
    primes.push(p);
  }

  //starting at half of the list
  for (let i = Math.floor(arg / 2); i < primes.length; i++) {
    p1 = primes[i];
    for (let j = Math.floor(arg / 2); j < primes.length; j++) {
      p2 = primes[j];

      if (i != j) {
        candidate = (p1 + p2) / 2;
        if (Primes.isPrime(candidate)) {
          console.log({ p1, p2, candidate });
          console.log(`${candidate} is prime!`);
        }
      }
    }
  }

};
