const Mouse = require('./mouse');
const Duck  = require('./duck');

function Cat(name) {
    this.name = name;
    this.isDeath = false;
    this.stomach = [];
}

Cat.prototype.eat = function(litteAnimal) {
    if(litteAnimal instanceof Mouse) {
        this.stomach.push(litteAnimal);
        litteAnimal.isDeath = true;
    } else {
        throw new Error('Cat can only eat litte animal !!');
    }
}

module.exports = Cat;