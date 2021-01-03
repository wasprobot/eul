module.exports.run = function (limit) {
  let sum = 0;
  let candidates = Array(limit);

  for (let c = 2; c <= limit; c++) {
    if (candidates[c] != "np") {
      candidates[c] = c;
      sum += c;
      for (let i = 2 * c; i <= limit; i += c) candidates[i] = "np";
    }
  }
  // candidates.forEach((c) => {
  //   if (c != "np") console.log(`${c},`);
  // });
  return `The sum of all the primes upto ${limit.toLocaleString()} is ${sum.toLocaleString()}`;
};
