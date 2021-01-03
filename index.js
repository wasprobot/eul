module.exports = {
  run: (problem, args) => {
    var startDate = new Date();
    console.log(require(`./src/problems/${problem}`).run(args));
    var endDate = new Date();
    console.log((endDate - startDate) / 1000, " seconds");
  },
};

require("make-runnable");
