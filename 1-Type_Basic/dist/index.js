"use strict";
/////////////////////////////////////[1 - Data Type Basic]
let age = 30;
let firstName = "Hasan";
let isFictional;
age = 31;
firstName = "Luigi";
isFictional = false;
let planets = "Earth";
let moons = 1;
let isLarge = false;
let nama = "Hasan";
planets = "Saturn";
moons = 105;
isLarge = true;
// null & undefined
let something;
let anotherThing;
something = null;
anotherThing = undefined;
/////////////////////////////////////[2 - Arrays & Objects]
let names = ["Hasan", "Violet", "Mikasa", "Alun"];
let ages = [77, 44, 47];
names.push("Kujou Sara");
ages.push(35);
// Type inference with arrays
let fruits = ["Apples", "Mango", "Bananas", "Durian"];
fruits.push("Peaches");
const f = fruits[3];
let things = [1, true, "hello"];
const t = things[0];
// Objects
let user = {
    firstName: "Syarifah Fadlun",
    age: 21,
    id: 69,
};
user.firstName = "Kujou Sara";
user.id = 7;
// Type inference with objects
let person = {
    name: "Mikasa",
    score: 4,
};
/////////////////////////////////////[3 - Functions]
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumber = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumber(12, 3);
function addAllNumbers(arrNum) {
    const result = arrNum.reduce((curVal, accum) => curVal + accum, 0);
    console.log(result);
}
addAllNumbers([1, 2, 3, 4, 5, 6, 7]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
console.log(formatGreeting("Violet", "Hello"));
