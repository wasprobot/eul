module.exports = {
  run: (problem) => {
    console.log(require(`./src/problems/${problem}`).run());
  },
};

require("make-runnable");
