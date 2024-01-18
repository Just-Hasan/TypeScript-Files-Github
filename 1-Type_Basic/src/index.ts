/////////////////////////////////////[1 - Data Type Basic]
let age: number = 30;
let firstName: string = "Hasan";
let isFictional: boolean;

age = 31;
firstName = "Luigi";
isFictional = false;

let planets = "Earth";
let moons = 1;
let isLarge = false;
let nama: string = "Hasan";

planets = "Saturn";
moons = 105;
isLarge = true;

// null & undefined
let something: null;
let anotherThing: undefined;

something = null;
anotherThing = undefined;

/////////////////////////////////////[2 - Arrays & Objects]
let names: string[] = ["Hasan", "Violet", "Mikasa", "Alun"];
let ages: number[] = [77, 44, 47];

names.push("Kujou Sara");
ages.push(35);

// Type inference with arrays
let fruits = ["Apples", "Mango", "Bananas", "Durian"];
fruits.push("Peaches");
const f = fruits[3];
let things = [1, true, "hello"];
const t = things[0];

// Objects
let user: { firstName: string; age: number; id: number };
