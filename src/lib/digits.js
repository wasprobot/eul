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
    const quotient = Math.floor(n / 10);
    if (quotient) { yield* this.digits(quotient); }
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
  },

  helper: (digits, powerOfThousand) => {
    if (digits == 0) return "";

    const bases = [
      [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
      ],
      ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ];

    const thousands = [
      null,
      "thousand",     //10e3
      "million",      //10e6
      "billion",      //10e9
      "trillion",     //10e12
      "quadrillion",  //10e15
      "quintillion",  //10e18
      "sextillion",   //10e21
      "septillion",   //10e24
      "octillion",    //10e27
      "nonillion",    //10e30
      "decillion"     //10e33
    ];

    let hund = 0;
    let tens = 0;
    let ones = 0;

    if (digits >= 100) {
      hund = Math.floor(digits / 100);
      tens = Math.floor((digits % 100) / 10);
      ones = Math.floor(digits % 10);

    } else if (digits >= 20) {
      tens = Math.floor(digits / 10);
      ones = digits % 10;

    } else {
      ones = digits;

    }

    let tensWord;
    let onesWord;

    //tens and ones
    if (tens == 1) {
      tensWord = bases[0][10 * tens + ones];

    } else {
      tensWord = bases[1][tens];
      onesWord = bases[0][ones];
    }

    let hundredsWord;

    if (powerOfThousand == 0 && (tensWord || onesWord)) {
      hundredsWord = hund ? `${bases[0][hund]} hundred and` : "";
    } else {
      hundredsWord = hund ? `${bases[0][hund]} hundred` : "";
    }

    const thousandsWord = powerOfThousand ? thousands[powerOfThousand] : "";

    let helperWord = "";

    if (hundredsWord) helperWord += " " + hundredsWord;
    if (tensWord) helperWord += " " + tensWord;
    if (onesWord) helperWord += " " + onesWord;
    if (thousandsWord) helperWord += " " + thousandsWord;

    return helperWord.trim();
  },

  words: (number, powerOfThousand = 0) => {
    const right = number % 1000;
    const left = Math.floor(number / 1000);

    // console.log({ left, right, thPlace });

    if (left + right == 0) return powerOfThousand ? "" : "zero";

    const leftWords = obj.words(left, powerOfThousand + 1);
    const rightWords = obj.helper(right, powerOfThousand);

    // console.log({ leftWords, rightWords });

    return `${leftWords} ${rightWords}`.trim();
  }
};

module.exports = obj;
