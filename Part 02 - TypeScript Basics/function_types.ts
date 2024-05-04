function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n1: number, n2: number) {
  console.log(`Result: ${n1 + n2}`);
  return 7;
}

function greet(firstName: string, lastName: string, phrase: string) {
  return `${phrase} ${firstName} ${lastName}`;
}

function addAndHandle(n1: number, n2: number, cb: (result: any) => void) {
  const res = n1 + n2;
  cb(res);
}

printResult(7, 7);

let combineValues: (a: number, b: number) => number;
let greetVariable: (first: string, last: string, phrase: string) => string;

greetVariable = greet;
combineValues = add;
combineValues = printResult;
// combineValues = 5;

console.log(combineValues(1, 2));
console.log(greetVariable("Hasan", "Basri", "Hello"));
addAndHandle(3, 5, (res) => console.log(res));
