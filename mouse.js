const chalk = require('chalk');

function Mouse(name) {
    this.name = name;
    isDeath = false;
}

Mouse.prototype.running = function() {
    console.log(chalk.blue('running...'));
}

module.exports = Mouse;