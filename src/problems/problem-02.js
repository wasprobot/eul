//Euler Problem 48
//https://projecteuler.net/problem=48

const A = require("../lib/arithmetic");
const cliProgress = require('cli-progress');

module.exports.run = function (args) {
    n = parseInt(args);

    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(n, 0);

    f1 = 1
    f2 = 2
    fib = 3
    sum = 2

    while (fib <= n) {
        bar1.update(fib);

        f1 = f2
        f2 = fib
        fib = f1 + f2

        if (fib%2 == 0) {
            sum += fib
        }
    }

    bar1.stop();
    return sum;
}