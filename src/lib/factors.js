var obj = {
  allDivisors: (n) => {
    let factors = [1];
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) factors.push(i);
    }
    return factors;
  },
  allFactors: (n) => {
    let factors = obj.allDivisors(n);
    factors.push(n);
    return factors;
  },
  sumOfDivisors: (n) => {
    let factors = obj.allDivisors(n);
    return factors.reduce((a, b) => a + b, 0);
  }
};

module.exports = obj;
