//Euler Problem 45
//https://projecteuler.net/problem=45

const G = require("../lib/geometric");

module.exports.run = function () {
    var _t = 1;
    var _p = 1;
    var _h = 1;

    var tf = true;
    var pf = true;
    var hf = true;
    
    while (true) {
        if (tf) tv = G.triangle(_t);
        if (pf) pv = G.pentagonal(_p);
        if (hf) hv = G.hexagonal(_h);

        if (tv > pv && tv > hv) {
            tf = false;
            pf = true;
            hf = true;
            _p++;
            _h++;
        }else if (pv > tv && pv > hv) {
            tf = true;
            pf = false;
            hf = true;
            _t++;
            _h++;
        } else if (hv > tv && hv > pv) {
            tf = true;
            pf = true;
            hf = false;
            _t++;
            _p++;
        } else {
            if (tv == pv && pv == hv) {
                console.log({tv, _t, _p, _h});
            }

            tf = true;
            pf = true;
            hf = true;

            _t++;
            _p++;
            _h++;
        }

        // console.log({_t, _p, _h});
    }
}