var CLI = require("clui"),
  Spinner = CLI.Spinner;
const G = require("../lib/geometric");
const Factors = require("../lib/factors");

module.exports.run = function() {
  var countdown = new Spinner("", ["-", "\\", "|", "/"]);
  countdown.start();

  let n = 1;
  let maxSum = 500;

  setInterval(() => {
    let triangle = G.triangle(n++);
    countdown.message(triangle);
    let factors = Factors.allFactors(triangle);
    let length = factors.length;

    if (length >= maxSum) {
      countdown.message(triangle);
      process.exit(0);
    }
  }, 10);
};
