var obj = {
  nth: n => {
    let sum = 0;
    while (n) sum += n--;
    return sum;
  }
};

module.exports = obj;
