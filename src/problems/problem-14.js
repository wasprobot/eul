var CLI = require("clui"),
  Spinner = CLI.Spinner;
const Chains = require("../lib/chains");

module.exports.run = function (limit) {
  var countdown = new Spinner("", ["-", "\\", "|", "/"]);
  countdown.start();

  let length = 0,
    maxLength = 0,
    candidate = 1,
    answer;

  setInterval(() => {
    length = Chains.collatz(candidate).length;
    if (maxLength < length) {
      maxLength = length;
      answer = candidate;
      countdown.message(`${candidate} produces a chain of length: ${length}`);
    }


    if (candidate >= limit) {
      countdown.message(
        `${candidate} is the starting number, under ${limit}, that produces the longest chain (length ${maxLength})`
      );
      countdown.message(length);
      process.exit(0);
    }

    candidate++;
  }, 10);

  // for (let i = 1; i <= limit; i++) {
  //   length = Chains.collatz(i).length;
  //   if (maxLength < length) {
  //     maxLength = length;
  //     answer = i;
  //   }
  // }
  // return `${candidate} is the starting number, under ${limit}, that produces the longest chain (length ${maxLength})`;
};
