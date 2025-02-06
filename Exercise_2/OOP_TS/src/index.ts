// // 13
// abstract class Shape {
//   abstract getPerimiter(): number;
//   constructor(private color: string) {
//     this.color = color;
//   }
// }

// class Circle extends Shape {
//   private radius: number;
//   private phi = 3.14;

//   constructor(color: string, radius: number) {
//     super(color);
//     this.radius = radius;
//   }

//   getPerimiter(): number {
//     return 2 * this.phi * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   private length: number;
//   private width: number;

//   constructor(color: string, length: number, width: number) {
//     super(color);
//     this.length = length;
//     this.width = width;
//   }

//   getPerimiter(): number {
//     return 2 * (this.width + this.length);
//   }
// }

// const circle_1 = new Circle("red", 23);
// const rectange_1 = new Rectangle("yellow", 24, 24);
// console.log(rectange_1.getPerimiter());

// 14
abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(sound: string): void;
}

class Tiger extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(sound: string): void {
    console.log(sound);
  }
}

class Lion extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(sound: string): void {
    console.log(sound);
  }
}

const lion_1 = new Lion("Lion");
lion_1.makeSound("Roar");
const tiger_1 = new Tiger("Tiger");
tiger_1.makeSound("Roarrr");
