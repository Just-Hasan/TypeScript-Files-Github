// const names = ["Hasan Basri", "Violet Evergarden"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   });
// });
// promise.then((data) => data);

// Generics in Function
function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj1 = merge({ name: "Hasan" }, { age: 19 });
console.log(mergedObj1);

/*
////////[Generic constraint]
Membatasi type yang bisa diterima oleh generic, T extends string berarti T hanya bisa menerima value tipe data string
*/
function sayHello<T extends string, U extends number>(name: T, age: U) {
  return `I'm ${name} and i'm ${age}`;
}

//saat memanggil function, tentukan generic type yang akan dimasukan sebagai paramater
const greet = sayHello("Hasan", 20);
console.log(greet);

interface Lengthy {
  length: number;
}
// Kode dibawah berarti argument dari function harus memiliki property length
// Karena countAndDescribe menggunakan interface Length sebagai type constraints
// pada generic type nya
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = `Got no value`;
  if (element.length === 1) {
    description = "Got one element";
  } else {
    description = `Got ${element.length} elements`;
  }
  return [element, description];
}

console.log(countAndDescribe("Hello"));

interface Person {
  name: string;
  age: number;
  address: string[];
}

function extractAndConvert<T extends Person, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(
  extractAndConvert(
    { name: "Hasan", address: ["Bjm", "Dasamaya"], age: 20 },
    "name"
  )
);

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  constructor() {}

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.splice(this.data.indexOf(item), 1)) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hasan");
textStorage.addItem("Kuro");
textStorage.addItem("Pipiw");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// const hasanObj = { name: "Hasan" };
// const alunObj = { name: "Alun" };
// objectStorage.addItem({ name: "Hasan" });
// objectStorage.addItem({ name: "Alun" });
// objectStorage.removeItem(hasanObj);
// console.log(objectStorage);

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Hasan", "Basri"];

function testGeneric<T extends string, U extends number>(a: T, b: U) {
  return `Param 1 : ${a}\nParam 2 : ${b}`;
}

console.log(testGeneric("Hasan", 7));

function testUnion(a: string | number) {
  return `Param 1 ${a}`;
}

console.log(testUnion("Hasan"));
