//Euler Problem 01
//https://projecteuler.net/problem=1

const A = require("../lib/arithmetic");
const cliProgress = require('cli-progress');

module.exports.run = function (args) {
    n = parseInt(args);
    i = 1
    sum = 0

    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(n, 0);

    while (i < n) {
        bar1.update(i);

        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
        i++;
    }

    bar1.stop();
    return sum;
}