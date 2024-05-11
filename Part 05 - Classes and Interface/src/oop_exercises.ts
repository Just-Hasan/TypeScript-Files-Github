// Exercise Source : https://www.w3resource.com/typescript-exercises/typescript_object-oriented_exercises.php

/*
/////////////////////////////////////[2]
Write a TypeScript class called Bus with the properties
make, model, and year. Implement a constructor that initializes
these properties when a Bus object is created

class Bus {
    constructor(public make: string, public model: string, public year: number) {}
}
const travelBus = new Bus("Toyota", "A1", 2017);
*/

/*
/////////////////////////////////////[2]
Write a TypeScript class called Bus with the properties
make, model, and year. Add a  method start() that prints a message
indicating that the Bus is starting

class Bus {
    make: string;
    model: string;
    year: number;
    
  constructor(model: string, make: string, year: number) {
      this.model = model;
    this.make = make;
    this.year = year;
}

start() {
    console.log(`Bus ${this.model} ${this.make} is starting`);
}
}

const travelBus = new Bus("Daihatsu", "A2", 2019);
travelBus.start();
*/

/*
/////////////////////////////////////[3]
Write a TypeScript class called SUV (Sports Utility Vehicle)
that extends the Car class. Add a property to represent
whether the SUV is suitable for off-road driving. Implement
a method that toggles odd-road capability and prints a message 
accordingly

class Car {
    offRoadCapability: boolean;
    constructor(
        public make: string,
        public model: string,
        public year: number,
        offRoadCapability: boolean
    ) {
        this.offRoadCapability = offRoadCapability;
    }
    
    offRoad() {
    if (this.offRoadCapability) {
      console.log(
          `${this.make} ${this.model} (${this.year}) ABLE to go off-road`
        );
    } else {
      console.log(
          `${this.make} ${this.model} (${this.year}) UNABLE to go off-road`
      );
    }
}

start() {
    console.log(`Bus ${this.model} ${this.make} is starting`);
}
}

class SUV extends Car {
    constructor(
        make: string,
        model: string,
        year: number,
        offRoadCapability: boolean
    ) {
        super(make, model, year, offRoadCapability);
    }
}

const SUV1 = new SUV("Daihatsu", "S1", 2019, false);
SUV1.offRoad();
*/

/*
/////////////////////////////////////[4]
Write a TypeScript class that defines a base class Car with properties
like make, model, and year, along with a start() method
that prints a starting message. Now create a class called engine
with the properties horsepower and fuelType. Modify the car class
to include an instance of the Engine class as a property.
Implement a method printCarDetails() in the Car class that prints
both car and engine details
class Car {
    private engineDetails: Engine;
    
    constructor(
        public make: string,
        public model: string,
        public year: number,
        engine: Engine
    ) {
        this.engineDetails = engine;
    }
    
    printCarDetails() {
        console.log(
            `${this.make} ${this.model} (Year: ${this.year}) has ${this.engineDetails.horsepower} horsepower and runs with ${this.engineDetails.fuelType}`
    );
}
}

class Engine {
    constructor(public horsepower: number, public fuelType: string) {}
}

const engine1 = new Engine(3000, "Dexlite");
const car1 = new Car("Lambhorgini", "GLD700", 2020, engine1);
car1.printCarDetails();

*/

/*
/////////////////////////////////////[5]
Write a TypeScript program that creates a class called Student with
properties name and class. Implement a constructor that initializes
these properties when a Student object is created
*/

class Student {
  constructor(public name: string, public classroom: string) {}
}

const mikasa = new Student("Mikasa Ackerman", "3A");
console.log(mikasa.name);
console.log(mikasa.classroom);
