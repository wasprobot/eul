module.exports = {
  run: (problem) => {
    var startDate = new Date();
    console.log(require(`./src/problems/${problem}`).run());
    var endDate = new Date();
    console.log((endDate - startDate) / 1000, " seconds");
  },
};

require("make-runnable");
