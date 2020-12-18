module.exports = {
  run: problem => require(`./src/problems/${problem}`).run()
};

require("make-runnable");
