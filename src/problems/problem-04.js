// https://projecteuler.net/problem=4
const Digits = require("../lib/digits");

module.exports.run = function (n) {
  let max = 0;
  for (let i = Math.pow(10, n) - 1; i > Math.pow(10, n - 1); i--) {
    for (let j = Math.pow(10, n) - 1; j > Math.pow(10, n - 1); j--) {
      let p = i * j;
      if (p == Digits.inverse(p)) {
        if (p > max) {
          max = p;
        }
      }
    }
  }
  return max;
};
