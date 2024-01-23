"use strict";
/*
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
let user: { firstName: string; age: number; id: number } = {
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
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumber = (a: number, b: number): number => {
  return a - b;
};

addTwoNumbers(3, 9);
subtractTwoNumber(12, 3);

function addAllNumbers(arrNum: number[]): void {
  const result = arrNum.reduce((curVal, accum) => curVal + accum, 0);
  console.log(result);
}

addAllNumbers([1, 2, 3, 4, 5, 6, 7]);

// return type inference
function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}

console.log(formatGreeting("Violet", "Hello"));

function maxMin(numArray: number[]): number[] {
  return [Math.max(...numArray), Math.min(...numArray)];
}

console.log(maxMin([12, 77, 99, 1, 3, 5, 10]));

interface Student {
  name: string;
  age: number;
  address: string;
}

const hasan: Student = {
  name: "Hasan Basri",
  age: new Date().getFullYear() - 2003,
  address: "Jln. HKSN Gg. Swadayatani RT. 10 RW. 01",
};

console.log(hasan);
*/
/////////////////////////////////////[Any Type]
// Normal Variable
let age;
let title; //If we don't specify any type, TS would infere it to be an 'any' type
// Arrays
const ages = ["hELLO"];
// Function
function add(value) {
    return value + value;
}
const resultOne = add("Hello");
const resultTwo = add(3);
console.log(resultOne);
console.log(resultTwo);
