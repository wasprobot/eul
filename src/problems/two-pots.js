const cliProgress = require('cli-progress');

//class Pot with 2 properties: soup and sauce
class Pot {
  constructor(name, soup, sauce) {
    this.name = name;
    this.soup = soup;
    this.sauce = sauce;
  }

  addSauce(amount) {
    this.sauce += amount;
  }

  pourInto(otherPot, quantity) {
    if (this.soup + this.sauce < quantity) {
      throw new Error(`Not enough mixture in ${this.name} to pour ${quantity} into ${otherPot.name}`);
    }

    let ratio = this.getRatio();
    let soupToPour = quantity * ratio;
    let sauceToPour = quantity - soupToPour;

    this.takeSoup(soupToPour);
    this.takeSauce(sauceToPour);

    otherPot.addSoup(soupToPour);
    otherPot.addSauce(sauceToPour);
  }

  addSoup(amount) {
    this.soup += amount;
  }

  addSauce(amount) {
    this.sauce += amount;
  }

  takeSoup(amount) {
    if (this.soup < amount) {
      throw new Error(`Not enough soup in ${this.name} to take ${amount}`);
    }

    this.soup -= amount;
  }

  takeSauce(amount) {
    if (this.sauce < amount) {
      throw new Error(`Not enough sauce in ${this.name} to take ${amount}`);
    }

    this.sauce -= amount;
  }

  getRatio() {
    return this.soup / (this.soup + this.sauce);
  }

  toString() {
    return `${this.name}: ${this.soup} litres of soup and ${this.sauce} litres of sauce`;
    //return `${this.name}: ${this.getRatio() * 100}% soup`;
  }
}

module.exports.run = function (args) {
  //Pot A has 6 litres of soup and 0 litres of sauce
  Pot.A = new Pot('A', 6, 0);
  //Pot B has 3 litres of soup and 1 litre of sauce
  Pot.B = new Pot('B', 3, 1);

  while (Math.abs(Pot.A.getRatio() - Pot.B.getRatio()) > 0.1) {
    console.log([Pot.A.toString(), Pot.B.toString()]);

    Pot.B.pourInto(Pot.A, 1);
    Pot.A.pourInto(Pot.B, 1);
  }
};
