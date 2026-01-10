//Euler Problem #20: Factorial digit sum
//https://projecteuler.net/problem=20
//Find the sum of the digits in the number 100!
const Time = require("../lib/time");

module.exports.run = function (args) {
  let max = args || 100;
  factorials = [1n];
  for (let i = 1n; i <= max; i++) {
    factorials.push(factorials[i - 1n] * i);
  }
  console.log({ factorials });

  let last = factorials[max];
  let sum = 0n;

  while (last > 0) {
    const remainder = last % 10n;
    const quotient = last / 10n;

    sum += remainder;

    // If the result is negative and there's 
    // a non-zero remainder, round down 
    // further (towards negative infinity).
    if (quotient < 0n && remainder !== 0n) {
      last = quotient - 1n;
    } else {
      last = quotient;
    }
  }

  console.log({ sum });
};
