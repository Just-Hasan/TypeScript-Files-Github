interface addFn {
  (a: number, b: number): number;
}

let add: addFn;
add = (a: number, b: number) => a + b;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet?(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(name?: string) {
    if (name) this.name = name;
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase}, I'm ${this.name}`);
    } else {
      console.log("Hi");
    }
  }
}

const user1 = new Person("Violet Evergarden");
user1.greet("Nice to meet you");
