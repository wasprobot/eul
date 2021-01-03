module.exports.run = function () {
  let sum = 0;
  let final = 2000000;
  let candidates = [];
  let index = 0;
  while (index <= final) {
    candidates.push({ n: index++, prime: null });
  }

  let c = 2;
  do {
    if (candidates[c].prime == null) {
      candidates[c].prime = true;
      sum += c;

      let index = 2 * c;
      while (index <= final) {
        candidates[index].prime = false;
        index += c;
      }
    }
    c++;
  } while (c <= final);

  return `The sum of all the primes below ${final} is ${sum}`;
};
