const Roots = require("../lib/roots");
const fs = require('fs');
const cliProgress = require('cli-progress');

module.exports.run = function (args) {
  args = "" + args;
  // let stream = fs.createWriteStream('sqrt.txt');
  // var data = "";
  var histogram = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  }
  var fractions = false;
  var precision = 1000000;

  const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar1.start(precision, 0);
  var progress = 0;

  for (const d of Roots.sqrt(args, precision)) {
    bar1.update(progress++);
  
    if (d == '.')
      fractions = true;
    else {
      if (fractions)
        histogram[Number(d)]++;
    }
  }

  console.log({ histogram });
  
  bar1.stop();

  // stream.write(data);
  // stream.end();
};
