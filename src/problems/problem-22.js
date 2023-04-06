//Euler Problem #22: Names scores
//https://projecteuler.net/problem=22
//What is the total of all the name scores in the file?

const Strings = require("../lib/strings");

module.exports.run = function (args) {
  //open file
  let fs = require("fs");
  let path = require("path");
  let filename = path.join(__dirname, "../data/p022_names.txt");
  fs.readFile(filename, "utf8", function (err, data) {
    data = data.replace(/"/g, "", );
    let names = data.split(",");
    names.sort();

    let index = 1;
    let sum = 0;
    names.forEach(name => {
      sum += index * Strings.alphabeticalValue(name);
      index++;
    });
    console.log({ sum });
  });
};
