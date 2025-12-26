const Roots = require("../lib/roots");

module.exports.run = function (args) {
  let n = parseInt(args);

  let a = 1;
  let b = 1;
  let c = 0;

  do {
    b = a;
    
    do {
      b++;
      
      c = Math.sqrt(a ** 2 + b ** 2)

      if (a + b + c == n) {
        console.log({ a, b, c });
      }

    } while (a + b + c < n);

    a++;
    c = 0;

  } while (a + b + c < n);

};
