function Cat(name) {
    this.name = name;
    this.isDeath = false;
    this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    mouse.isDeath = true;
}

module.exports = Cat;