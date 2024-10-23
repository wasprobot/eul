//Euler Problem 47
//https://projecteuler.net/problem=47

const P = require("../lib/primes");

module.exports.run = function (args) {
    f = parseInt(args);
    return P.uniquePrimeFactors(f);

    let found = 0;
    let n = 4;

    while (found < f) {
        if (P.uniquePrimeFactors(n).length == f) {
            found++;
        }
        else {
            found = 0;
        }
        n++;
        // console.log({n});
    }
    return n-f;
    
}