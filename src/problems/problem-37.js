const cliProgress = require('cli-progress');
const Primes = require("../lib/primes");

module.exports.run = function (args) {
    // const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    // bar1.start(40, 0);

    current = {};

    if (args) {
        for (const key of args.toString().split(',')) {
            current[key] = parseInt(key);
            size = key.length;
        }
    } else {
        current = { '2': 2, '3': 3, '5': 5, '7': 7 };
        size = 1;
    }

    console.log({current});
    
    final = {};

    // current = { '373': 373 };
    // final = { '373': 373 };

    // do {
    foundMore = false;
    next = {}

    Object.keys(current).forEach(p => {
        // console.log({ p });

        [1, 3, 7, 9].forEach(d => {
            //add 'd' to the right
            candidate = (p * 10) + d;
            // console.log({ candidate });

            if (Primes.isLeftTruncatablePrime(candidate)) {
                next[candidate] = candidate;
                foundMore = true;
            }
        });

        [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(d => {
            //add 'd' to the left
            candidate = (d * 10 ** size) + p;
            // console.log({ candidate });

            if (Primes.isRightTruncatablePrime(candidate)) {
                next[candidate] = candidate;
                foundMore = true;
            }

            // bar1.update((i + 1) * (d + 1))
        });

        // size++;
    });

    // console.log({ next });

    final = { ...final, ...next };
    // console.log({ final });

    current = structuredClone(next);
    // console.log({ current });

    // } while (foundMore);

    // bar1.stop();
    return Object.keys(final).join(',');
};
