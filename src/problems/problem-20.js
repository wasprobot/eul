//Euler Problem #20: Factorial digit sum
//https://projecteuler.net/problem=20
//Find the sum of the digits in the number 100!
const Time = require("../lib/time");

module.exports.run = function (args) {
  let max = args || 100;
  factorials = [1];
  for (let i = 1; i <= max; i++) {
    factorials.push(factorials[i - 1] * i);
  }
  let last = factorials[max];
  let sum = 0;
  while (last > 0) {
    let digit = last % 10;
    console.log({ digit });
    sum += last % 10;
    last = Math.floor(last / 10);
  }
  console.log({ sum });
};
