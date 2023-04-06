var obj = {
  alphabeticalValue: (s) => {
    var sum = 0;
    s = s.toUpperCase();
    for (let i = 0; i < s.length; i++) {
      sum += s.charCodeAt(i) - 64;
    }
    return sum;
  },
};

module.exports = obj;
