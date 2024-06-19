/*
////////[Decorator]
Decorator is a function that executes when the class
is defined, decorator accepts one paramater, which is
the constructor function of the class

Decorator adalah function yang dieksekusi ketika suatu
class di definisikan, decorator menerima satu paramater
yaitu constructor function itu sendiri

Perlu dimengerti bahwa decorator di eksekusi saat class
di definisikan, bukan saat class di gunakan untuk membuat
object
*/

/*
////////[Decorator Factory]
Decorator factory is basically a cool name for decorator
that can accepts paramater. The closure concept is being
applied here

Decorator factory tuh cuman decorator yang bisa menerima
paramater, konsep closure diterapkan disini
*/

// function Logger(constructor: Function) {
//   console.log("Logging");
//   console.log(constructor);
// }

// function Logger_DecoratorFactory(logString: string) {
//   // konsep closure diterapkan disini
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @Logger
// @WithTemplate("<h2>Testing template</h2>", "app")
// class Person {
//   name = "Hasan";
//   constructor() {
//     // this.name = "Hasan";
//     console.log("Creating person object");
//   }
// }

// const person1 = new Person();

// //
function WithTemplate(template: string, hookId: string) {
  return function (originalConstructor: any) {
    return class extends originalConstructor {
      constructor() {
        super();
        const hookEl = document.getElementById(hookId);
        const obj = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = obj.name;
        }
      }
    };
  };
}

function PropertyDecorator(target: any, propertyName: string | Symbol) {
  console.log(`Property Decorator`);
  console.log(target, propertyName);
}

function AccessorDecorator(
  target: any,
  accessorName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(accessorName);
  console.log(descriptor);
}

function MethodDecorator(
  target: any,
  targetName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(targetName);
  console.log(descriptor);
}

function ParamaterDecorator(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log("Paramater Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @PropertyDecorator
  title: string;
  // the log decorator will have the propertyName of title
  private price: number;

  @AccessorDecorator
  set changePriceTo(value: number) {
    if (value > 0) {
      this.price = value;
    } else {
      throw new Error("You cannot have a negative number");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  @MethodDecorator
  getPriceWithTax(@ParamaterDecorator tax: number) {
    const priceTax = (this.price * tax) / 100;
    return tax + priceTax;
  }
}
