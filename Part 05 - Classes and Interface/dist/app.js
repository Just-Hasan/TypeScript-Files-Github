"use strict";
let add;
add = (a, b) => a + b;
class Person {
    constructor(name) {
        if (name)
            this.name = name;
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase}, I'm ${this.name}`);
        }
        else {
            console.log("Hi");
        }
    }
}
const user1 = new Person("Violet Evergarden");
user1.greet("Nice to meet you");
//# sourceMappingURL=app.js.map