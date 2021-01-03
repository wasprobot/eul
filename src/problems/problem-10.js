module.exports.run = function (final) {
  let sum = 0;
  let candidates = [];
  let index = 0;
  while (index <= final) candidates.push(index++);

  let c = 2;
  do {
    if (candidates[c] != -1) {
      sum += c;
      for (let i = 2 * c; i <= final; i += c) candidates[i] = -1;
    }
    c++;
  } while (c <= final);

  return `The sum of all the primes below ${final.toLocaleString()} is ${sum.toLocaleString()}`;
};
