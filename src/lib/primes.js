var obj = {
  isCoprimeToAll: (n, list) => {
    for (let index = 0; index < list.length; index++) {
      if (n % list[index] == 0) return false;
    }
    return true;
  },

  isPrime: (n, smallerPrimes = []) => {
    if (n == 1) return false;
    if (n == 2) return true;

    let candidate = smallerPrimes.length
      ? smallerPrimes[smallerPrimes.length - 1]
      : 2;

    do {
      if (obj.isCoprimeToAll(candidate, smallerPrimes))
        smallerPrimes.push(candidate);
      if (n % candidate == 0) return false;
    } while (++candidate < n);

    return true;
  },

  nextPrime: (n, smallerPrimes = []) => {
    if (n < 2) return 2;

    n += n % 2 == 0 ? 1 : 2;
    while (!obj.isPrime(n, smallerPrimes)) {
      n += 2;
      console.log({ n });
      console.log({ smallerPrimes });
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
};

module.exports = obj;
