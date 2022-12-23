const D = require("../lib/digits");
const A = require("../lib/arithmetic");

var obj = {
  *sqrt(ns, precision) {
    var divisor = "";
    var remainder = "0";

    for (const portion of D.twos(ns, precision)) {
      if (portion == ".") {

        yield "."

      } else {

        remainder = A.add(remainder + "00", portion);

        var digit = 9;

        while (digit > 0) {
          var divisor10PlusDigit = divisor + digit;
          var divisor10PlusDigitTimesDigit = A.multiply(divisor10PlusDigit, "" + digit);

          // console.log({ remainder, digit, divisor, divisor10PlusDigit, divisor10PlusDigitTimesDigit });

          if (A.compare(divisor10PlusDigitTimesDigit, remainder) <= 0) {
            break;
          }

          digit--;
        }

        var temp = digit == 0 ? "0" : divisor10PlusDigitTimesDigit;

        // console.log({ temp, divisor10PlusDigitTimesDigit });

        remainder = A.subtract(remainder, temp);
        divisor = A.add(divisor + digit, "" + digit);

        // console.log({ temp, digit, divisor, remainder });

        yield "" + digit;

      }
    }
  }
};

module.exports = obj;
