const Triangles = require("../lib/triangles");
const Factors = require("../lib/factors");

module.exports.run = function() {
  let maxSum = 500,
    factors = [],
    n = 1,
    length,
    triangle;
  do {
    triangle = Triangles.nth(n++);
    factors = Factors.allFactors(triangle);
    length = factors.length;
  } while (length <= maxSum);

  console.log(`The triangle number with >${maxSum} factors:${triangle}`);
};
