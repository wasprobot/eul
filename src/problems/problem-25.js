//Euler Problem 25
//https://projecteuler.net/problem=25

const A = require("../lib/arithmetic");
const cliProgress = require('cli-progress');

module.exports.run = function (args) {
    n = parseInt(args);

    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(n, 0);

    f1 = "1"
    f2 = "1"
    fib = "2"

    index = 3
    while (fib.length < n) {
        bar1.update(fib.length);

        f1 = f2
        f2 = fib
        fib = A.add(f1, f2)

        index++;
    }

    bar1.stop();
    return index;
}