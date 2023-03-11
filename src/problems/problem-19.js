//Euler Problem #19: Counting Sundays
//https://projecteuler.net/problem=19
//How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
const Time = require("../lib/time");

module.exports.run = function (args) {
  let count = 0;
  let shifts = 1; //1900 ended on a Monday

  for (let y = 1901; y <= 2000; y++) {
    for (let m = 0; m < 12; m++) {
      shifts += Time.shifts(y, m, 1);
      if (shifts % 7 == 0) {
        count++;
      }
    }
  }
  console.log({ count });
};
