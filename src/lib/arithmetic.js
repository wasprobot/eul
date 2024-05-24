var obj = {
  times10: (ns) => {
    return obj.strip(ns + "0");
  },

  timesPower10: (ns, p) => {
    return obj.strip(ns + "0".repeat(p));
  },

  add: (ns1, ns2) => {
    var result = "";
    var i1 = ns1.length - 1;
    var i2 = ns2.length - 1;
    var carry = 0;

    while (i1 >= 0 && i2 >= 0) {
      var sum = Number(ns1[i1--]) + Number(ns2[i2--]) + carry;
      if (sum > 9) {
        // the carry ius never more than 1
        carry = 1;
        sum = sum % 10;
      } else {
        carry = 0;
      }

      result = sum + result;
    }

    // remainder of the first number
    while (i1 >= 0) {
      var sum = Number(ns1[i1--]) + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum % 10;
      } else {
        carry = 0;
      }

      result = sum + result;
    }

    // remainder of the second number
    while (i2 >= 0) {
      var sum = Number(ns2[i2--]) + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum % 10;
      } else {
        carry = 0;
      }

      result = sum + result;
    }

    if (carry > 0) {
      result = carry + result;
    }

    return result;
  },

  multiply: (ns1, ns2) => {
    var result = "";

    //for each digit of the multiplier
    for (let i2 = ns2.length - 1, power = 0; i2 >= 0; i2--, power++) {

      var line = "";
      var carry = 0;

      //for each digit of the multiplicand
      for (let i1 = ns1.length - 1; i1 >= 0; i1--) {

        var product = Number(ns2[i2]) * Number(ns1[i1]) + carry

        if (product > 9) {
          var digit = product % 10;
          carry = (product - digit) / 10;
          product = digit;
        } else {
          carry = 0;
        }

        line = product + line;
      }

      if (carry > 0) {
        line = carry + line;
        carry = 0;
      }

      line = obj.timesPower10(line, power);
      result = obj.add(result, line);
    }

    return result;
  },
  power: (ns1, ns2) => {
    var result = ns1;
    if (ns2 == 0) return "1";

    while (--ns2 > 0) {
      result = obj.multiply(result, ns1);
    }

    return result;
  },

  compare: (ns1, ns2) => {
    ns1 = obj.strip(ns1);
    ns2 = obj.strip(ns2);

    var i1 = ns1.length;
    var i2 = ns2.length;

    if (i1 > i2) {
      return 1;
    } else if (i1 < i2) {
      return -1;
    } else {
      for (let i = 0; i < i1; i++) {
        var n1 = Number(ns1[i]);
        var n2 = Number(ns2[i]);

        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
      }
    }

    return 0;
  },

  strip: (ns) => {
    var l = ns.length;
    var i = 0;
    while (i < l - 1 && ns[i] == "0") {
      i++;
    }

    return ns.substring(i);
  },

  subtract: (ns1, ns2) => {
    var com = obj.compare(ns1, ns2);

    if (com == 0) return 0;

    if (com < 0) return "-" + obj.subtract(ns2, ns1);

    var result = "";
    var i1 = ns1.length - 1;
    var i2 = ns2.length - 1;

    while (i1 >= 0 && i2 >= 0) {
      var n1 = Number(ns1[i1--]);
      var n2 = Number(ns2[i2--]);
      var diff = n1 - n2;

      // console.log("n1:" + ns1[i1]);
      // console.log({ ns1, diff, n1, n2 });

      if (diff < 0) {
        //there is a digit to the left
        if (i1 >= 0) {
          //borrow from the closest digit to the left
          var borrowed = false;
          for (let i = i1; i >= 0; i--) {

            if (ns1[i] != "0") {
              ns1 = ns1.substring(0, i) + String(Number(ns1[i]) - 1) + ns1.substring(i + 1);
              borrowed = true;
              break;

            } else {
              ns1 = ns1.substring(0, i) + "9" + ns1.substring(i + 1);
            }
          }

          if (borrowed) {
            diff += 10;
          }
        } else {
          //exit
          break;
        }
      }

      result = diff + result;
    }

    while (i1 >= 0) {
      result = ns1[i1--] + result;
    }

    return obj.strip(result);
  }

};

module.exports = obj;
