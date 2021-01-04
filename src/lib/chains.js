obj = {
  _collatz: {},
  collatz: n => {
    /**
     * n → n/2 (n is even)
     * n → 3n + 1 (n is odd) **/
    if (!obj._collatz[n])
      obj._collatz[n] =
        n == 1 ? [1] : [n].concat(obj.collatz(n % 2 ? 3 * n + 1 : n / 2));

    return obj._collatz[n];
  }
};

module.exports = obj;
