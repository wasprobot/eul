var obj = {
  triangle: n => {
    return n * (n + 1) / 2;
  },
  square: n => {
    return n * n;
  },
  pentagonal: n => {
    return n * (3 * n - 1) / 2;
  },
  hexagonal: n => {
    return n * (2 * n - 1);
  }
};

module.exports = obj;
