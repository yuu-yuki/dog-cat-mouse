function Cat(name) {
    this.name = name;
    this.isDeath = false;
    this.stomach = [];
}

Cat.prototype.eat = function(litteAnimal) {
    this.stomach.push(litteAnimal);
    litteAnimal.isDeath = true;
}

module.exports = Cat;