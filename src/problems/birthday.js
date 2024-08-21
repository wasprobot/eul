module.exports.run = function (args) {
  n = args-1;

  num = 365;
  P = 1;
  while (n > 0) {
    console.log({n});
    P *= (366 - n) / 366;
    n--;
  }

  console.log(1 - P);
};
