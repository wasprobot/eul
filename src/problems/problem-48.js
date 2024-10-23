//Euler Problem 48
//https://projecteuler.net/problem=48

const A = require("../lib/arithmetic");
const cliProgress = require('cli-progress');

module.exports.run = function (args) {
    n = parseInt(args);

    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(n, 0);
    var progress = 0;

    sum = "0"

    for (let i = 1; i <= n; i++) {
        bar1.update(++progress);

        p = A.power(i.toString(), i)   
        sum = A.add(sum, p)
    }

    bar1.stop();
    return sum;
}