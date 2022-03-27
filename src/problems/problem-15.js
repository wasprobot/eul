const Lattices = require("../lib/lattices");

module.exports.run = function (args) {
  rows = parseInt(args.split(',')[0]);
  cols = parseInt(args.split(',')[1]);

  return `The number of paths in a ${rows}x${cols} matrix are: ${Lattices.numberOfPaths(rows, cols)}`;
};
