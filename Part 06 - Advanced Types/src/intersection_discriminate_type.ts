type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElavatedEmployee = Admin & Employee;

const e1: ElavatedEmployee = {
  name: "Hasan Basri",
  startDate: new Date(),
  privileges: ["Organizing Meeting"],
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

const student: Universal = 7; // -> will have the 'number' type cuz, the 'number' type is in Combinable and Numeric

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();

  return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(person: UnknownEmployee) {
  console.log(`Name : ${person.name}`);
  if ("privileges" in person) {
    console.log(person.privileges);
  }
  if ("startDate" in person) {
    console.log(person.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo...${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  //   checking if the loadCargo method is in vehicle
  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(200);
  //   }

  //   checks whether vehicle is an instance created from Truck class
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(77);
  }
}

// useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(`Moving at speed ${speed}`);
}

const stallion: Animal = {
  type: "horse",
  runningSpeed: 65,
};

moveAnimal(stallion);
