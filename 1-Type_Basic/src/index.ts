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

/////////////////////////////////////[Any Type]

// Normal Variable
let age: any;
let title; //If we don't specify any type, TS would infere it to be an 'any' type

// Arrays
const ages: any[] = ["hELLO"];

// Function
function add(value: any): number {
  return value + value;
}

const resultOne = add("Hello");
const resultTwo = add(3);

console.log(resultOne);
console.log(resultTwo);

/////////////////////////////////////[Tuple]
let person: [string, number, boolean] = ["Hello", 7, true];
let person2: any[] = ["Hello", 7, false];

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [94.7, 94.1];

function useCoords(): [number, number] {
  const lat = 100;
  const long = 50;
  return [lat, long];
}

const [lat, long] = useCoords();

// Named Tuples

let user: [name: string, age: number];
user = ["Peach", 23];
console.log(user[0]);

/////////////////////////////////////[Interface]
interface Author {
  name: string;
  avatar: string;
}

const author1: Author = { name: "Hasan", avatar: "image/hasan.png" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  createAt: Date;
  author: Author;
}

const creator1: Post = {
  title: "My First Post",
  body: "Siu",
  tags: ["gaming", "tech"],
  createAt: new Date(),
  author: { name: "Syarifah Fadlun", avatar: "alun.png" },
};
const creator2: Post = {
  title: "ReactJS is the best JavaScript framework",
  body: "ReactJS is a UI Library developed by Facebook that allows us to build UI based on components",
  tags: ["reactjs", "tech"],
  createAt: new Date(),
  author: { name: "Hasan Basri", avatar: "hasan.png" },
};

// Interface as argument type
function createPost(post: Post) {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(creator1);

// Interface with array
const posts: Post[] = [creator1, creator2];
console.log(posts);
*/

/////////////////////////////////////[Type]
type Rgb = [number, number, number];

function getRandomRGB(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}
const colorOne = getRandomRGB();
const [red, green, blue] = getRandomRGB();

// Object Literal
type User = {
  name: string;
  score: number;
};

const userOne: User = { name: "Hasan", score: 7 };
const testName = "Ronaldo";
console.log(testName.endsWith("o"));
function formatUser(user: User): void {
  const { name, score } = user;
  console.log(`${name} got ${score}`);
}
formatUser(userOne);
/////////////////////////////////////[Test]
// // test
// interface Student {
//   name: string;
//   age: number;
// }
// const student1: Student = { name: "Hasan", age: 20 };
// const student2: Student = { name: "Alun", age: 21 };
// const student3: Student = { name: "Sara", age: 22 };
// const user3: any[] = [student1, student2, student3];
// user3.forEach((user) => console.log(user.name));
