//Euler Problem 24
//https://projecteuler.net/problem=24

const Perms = require("../lib/perms");

module.exports.run = function (args) {
    for (let p of Perms.permutations("0123456789")) {
        if (--args == 0) {
            console.log({ p });
            break;
        }
    }
}