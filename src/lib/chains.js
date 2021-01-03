obj = {
  collatz: (n) => {
    // n → n/2 (n is even)
    // n → 3n + 1 (n is odd)
    if (n == 1) return [1];
    return [n].concat(obj.collatz(n % 2 ? 3 * n + 1 : n / 2));
  },
};

module.exports = obj;
