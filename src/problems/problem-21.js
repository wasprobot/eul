//Euler Problem #21: Amicable numbers
//https://projecteuler.net/problem=21
//Evaluate the sum of all the amicable numbers under 10000.

const Factors = require("../lib/factors");

module.exports.run = function (args) {
  let max = args || 10000;
  let sums = {};
  for (let n = 1; n <= max; n++) {
    sums[n] = Factors.sumOfDivisors(n);
  }

  let sum = 0;
  Object.keys(sums).forEach((n) => {
    if (sums[n] != n && sums[sums[n]] == n) {
      sum += parseInt(n);
    }
  });
  console.log(sum);
};
