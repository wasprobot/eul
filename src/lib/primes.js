var obj = {
  isCoprimeToAll: (n, list) => {
    for (let i = 0; i < list.length; i++) {
      //item in the list divides n
      if (n % list[i] == 0) return false;
    }
    return true;
  },

  isPrime: (n, smallerPrimes = []) => {
    if (n == 1) return false;
    if (n == 2) return true;
    if (n == 3) {
      if (!smallerPrimes.length) { smallerPrimes.push(2); }
      return true;
    }

    //are the smaller primes given?
    let candidate;

    if (smallerPrimes.length) {
      //the last prime entry
      candidate = smallerPrimes[smallerPrimes.length - 1];

      //must be odd
      if (candidate % 2 == 0) throw new Error("supplied smallerPrimes has errors");

      candidate += 2;

    } else {
      smallerPrimes.push(2);

      candidate = 3;
    }

    let isCoprime = false;

    do {
      // console.log({ candidate });

      if (obj.isCoprimeToAll(candidate, smallerPrimes)) {

        if (candidate == n) return true;

        smallerPrimes.push(candidate);
        // console.log({ smallerPrimes });
        isCoprime = true;

      } else {

        isCoprime = false;

      }

      //the candidate divides n --> it's not prime
      if (n % candidate == 0) return false;

      candidate += 2;
    } while (candidate <= n);

    return isCoprime;
  },

  nextPrime: (n, smallerPrimes = []) => {
    if (n < 2) return 2;

    //the next odd number
    if (n % 2) {
      n += 2;
    } else {
      n += 1
    }

    //keep going until you find a prime
    while (!obj.isPrime(n, smallerPrimes)) {
      n += 2;
    }

    return n;
  },

  nthPrime: (n) => {
    let prime = 0;
    while (n--) prime = obj.nextPrime(prime);

    return prime;
  },

  primeFactors: (n) => {
    let factors = [];
    let i = 2;
    do {
      if (n % i == 0 && obj.isPrime(i)) {
        factors.push(i);
        n = n / i;
      }
      i = obj.nextPrime(i);
    } while (i <= n / 2);

    if (obj.isPrime(n)) factors.push(n);

    return factors;
  },

  uniquePrimeFactors: (n) => {
    let factors = {};
    let i = 2;
    do {
      if (n % i == 0 && obj.isPrime(i)) {
        factors[i] = i;
        n = n / i;
      }
      i = obj.nextPrime(i);
    } while (i <= n / 2);

    if (obj.isPrime(n)) factors[n] = n;

    return Object.values(factors);
  },

};

module.exports = obj;
