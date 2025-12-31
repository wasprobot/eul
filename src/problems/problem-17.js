// Project Euler Problem 16: Power digit sum
// https://projecteuler.net/problem=17
const D = require("../lib/digits");

module.exports.run = function (args) {
  n = parseInt(args);

  // return D.words(n);

  let totalWords = "";

  for (let i = 1; i <= n; i++) {
    totalWords += D.words(i).replaceAll(' ', '');
  }

  return { words: totalWords, length: totalWords.length };
};
