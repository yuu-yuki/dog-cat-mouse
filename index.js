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

try {
    tom.eat(bull);
} catch (err) {
    console.log('Error while eat dog');
}

bull.eat(tom)
console.log(bull);
console.log('demo pull code');

