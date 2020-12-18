module.exports.allFactors = n => {
  let factors = [1];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) factors.push(i);
  }
  factors.push(n);
  return factors;
};
