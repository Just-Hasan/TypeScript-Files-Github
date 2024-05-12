"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase}, I'm ${this.name}`);
    }
}
const user1 = new Person("Violet Evergarden");
user1.greet("Nice to meet you");
//# sourceMappingURL=app.js.map