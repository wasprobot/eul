//Euler Problem 06
//https://projecteuler.net/problem=6

const cliProgress = require('cli-progress');

module.exports.run = function (args) {
    n = parseInt(args);

    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(n, 0);

    squareOfSum = (n*(n+1)/2)**2;
    sumOfSquares = 0;

    while (n) {
        sumOfSquares += n**2;
        n--;
    }

    bar1.stop();
    return squareOfSum - sumOfSquares;
}