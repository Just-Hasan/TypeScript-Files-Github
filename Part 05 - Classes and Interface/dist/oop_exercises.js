"use strict";
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}
class Tiger extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    roar() {
        console.log(`${this.name} is roaring`);
    }
}
const bengalTiger = new Tiger("Bengal Tiger", "cat");
bengalTiger.roar();
//# sourceMappingURL=oop_exercises.js.map