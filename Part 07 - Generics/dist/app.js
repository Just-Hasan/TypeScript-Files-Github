"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj1 = merge({ name: "Hasan" }, { age: 19 });
console.log(mergedObj1);
function sayHello(name, age) {
    return `I'm ${name} and i'm ${age}`;
}
const greet = sayHello("Hasan", 20);
console.log(greet);
function countAndDescribe(element) {
    let description = `Got no value`;
    if (element.length === 1) {
        description = "Got one element";
    }
    else {
        description = `Got ${element.length} elements`;
    }
    return [element, description];
}
console.log(countAndDescribe("Hello"));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "Hasan", address: ["Bjm", "Dasamaya"], age: 20 }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.splice(this.data.indexOf(item), 1)) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Hasan");
textStorage.addItem("Kuro");
textStorage.addItem("Pipiw");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Hasan", "Basri"];
function testGeneric(a, b) {
    return `Param 1 : ${a}\nParam 2 : ${b}`;
}
console.log(testGeneric("Hasan", 7));
function testUnion(a) {
    return `Param 1 ${a}`;
}
console.log(testUnion("Hasan"));
//# sourceMappingURL=app.js.map