obj = {
  *permutations(s) {
    if (s.length == 1) {
      yield s;
      return;
    }
    else if (s.length == 2) {
      yield s;
      yield s[1] + s[0];
      return;
    }
    else {
      for (let i = 0; i < s.length; i++) {
        let c = s[i];
        let rest = s.slice(0, i) + s.slice(i + 1);
        for (let p of this.permutations(rest)) {
          yield c + p;
        }
      }
    }
  },
};

module.exports = obj;
