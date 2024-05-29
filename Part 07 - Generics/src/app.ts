// const names = ["Hasan Basri", "Violet Evergarden"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   });
// });
// promise.then((data) => data);

// Generics in Function
function merge<T, U>(objA: T, objB: U): T & U {
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
