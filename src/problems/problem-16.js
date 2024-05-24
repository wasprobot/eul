// Project Euler Problem 16: Power digit sum
// https://projecteuler.net/problem=16
const A = require("../lib/arithmetic");

module.exports.run = function (args) {
  exponent = parseInt(args);
  power = A.power("2", args);
  sum = 0;

  console.log({ power });

  for (let i = 0; i < power.length; i++) {
    sum += parseInt(power[i]);
  }

  console.log(`Sum: ${sum}`);
};
