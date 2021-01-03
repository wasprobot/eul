module.exports.run = function () {
  let sum = 0;
  let final = 2000000;
  let candidates = [];
  let index = 0;
  while (index <= final) candidates.push(index++);

  let c = 2;
  do {
    if (candidates[c] != -1) {
      sum += c;

      let index = 2 * c;
      while (index <= final) {
        candidates[index] = -1;
        index += c;
      }
    }
    c++;
  } while (c <= final);

  return `The sum of all the primes below ${final} is ${sum}`;
};
