function Dog(name) {
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function(litteAnimal) {
    this.stomach.push(litteAnimal);
    litteAnimal.isDeath = true;
}

module.exports = Dog;