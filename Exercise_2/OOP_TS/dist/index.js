"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Tiger extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound(sound) {
        console.log(sound);
    }
}
class Lion extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound(sound) {
        console.log(sound);
    }
}
const lion_1 = new Lion("Lion");
lion_1.makeSound("Roar");
const tiger_1 = new Tiger("Tiger");
tiger_1.makeSound("Roarrr");
