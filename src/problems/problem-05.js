//Euler Problem 05
//https://projecteuler.net/problem=5

const cliProgress = require('cli-progress');
const Primes = require("../lib/primes");

module.exports.run = function (args) {
    n = parseInt(args);
    multiple = 1

    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(n, 0);

    while (n > 1) {
        let factors = Primes.primeFactors(n);
        for (let p in factors) {
            p = parseInt(p);
            let count = factors[p];
            let existingCount = 0;
            if (multiple % p == 0) {
                let mFactors = Primes.primeFactors(multiple);
                if (mFactors[p]) {
                    existingCount = mFactors[p];
                }
            }
            for (let i = 0; i < count - existingCount; i++) {
                multiple = multiple * p;
            }
        }
        bar1.update(n);
        n--;
    }

    bar1.stop();
    return multiple;
}