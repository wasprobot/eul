const cliProgress = require('cli-progress');

module.exports.run = function (args) {
  args = args.split(',').map(Number);

  console.log({ args });
  let step = 0;
  let allEqual = false;

  while (!allEqual) {
    newArgs = [];
    for (let index = 0; index < args.length; index++) {
      const current = args[index];
      const next = args[index+1] || args[0];
      newArgs.push(current > next ? current - next : next - current);
    }
    args = newArgs;

    allEqual = true;
    for (let index = 0; index < args.length; index++) {
      const current = args[index];
      const next = args[index+1] || args[0];
      if (current != next) {
        allEqual = false;
        break;
      }
    }
  
    console.log({ args });
    step++;
  }

  console.log({ step });
};
