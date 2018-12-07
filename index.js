const Dog = require('./dog');
const Cat = require('./cat');
const Mouse = require('./mouse');
const chalk = require('chalk');

var jerry = new Mouse('jerry');
var tom = new Cat('tom');
var bull = new Dog('bull');
jerry.running();
tom.eat(jerry);
console.log(tom);
console.log(jerry);
bull.eat(tom)
console.log(bull);

