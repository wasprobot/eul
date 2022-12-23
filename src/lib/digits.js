obj = {
  *twos(ns, precision = 0) {
    if (ns == "") return;

    if (ns.length % 2 == 1) {
      ns = "0" + ns;
    }

    for (let i = 0; i < ns.length; i += 2) {
      yield ns[i] + ns[i + 1];
    }

    if (precision) {
      yield ".";
    }

    while (precision--) {
      yield "00";
    }
  },
  *digits(n) {
    if (n == 0) {
      yield 0;
      return;
    }
    yield* this.digits(Math.floor(n / 10));
    yield n % 10;
  },
  numDigits: (n) => {
    var nd = 0;
    while (n > 0) {
      n = Math.floor(n / 10);
      nd++;
    }
    return nd;
  },
  inverse: (n) => {
    var ni = 0;
    while (n > 0) {
      ni = ni * 10 + n % 10;
      n = Math.floor(n / 10);
    }
    return ni;
  }

};

module.exports = obj;
