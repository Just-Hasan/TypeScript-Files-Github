"use strict";
const e1 = {
    name: "Hasan Basri",
    startDate: new Date(),
    privileges: ["Organizing Meeting"],
};
const student = 7;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    return a + b;
}
function printEmployeeInformation(person) {
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
    loadCargo(amount) {
        console.log(`Loading cargo...${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(77);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log(`Moving at speed ${speed}`);
}
const stallion = {
    type: "horse",
    runningSpeed: 65,
};
moveAnimal(stallion);
//# sourceMappingURL=intersection_discriminate_type.js.map