var CLI = require("clui"),
  Spinner = CLI.Spinner;
const Triangles = require("../lib/triangles");
const Factors = require("../lib/factors");

module.exports.run = function() {
  var countdown = new Spinner("", ["-", "\\", "|", "/"]);
  countdown.start();

  let n = 1;
  let maxSum = 100;
  let triangle;

  setInterval(() => {
    let triangle = Triangles.nth(n++);
    countdown.message(triangle);
    let factors = Factors.allFactors(triangle);
    let length = factors.length;

    if (length >= maxSum) {
      countdown.message(triangle);
      process.exit(0);
    }
  }, 10);

  // do {
  //   triangle = Triangles.nth(n++);
  //   factors = Factors.allFactors(triangle);
  //   length = factors.length;
  // } while (length <= maxSum);

  // console.log(`The triangle number with >${maxSum} factors:${triangle}`);
};
