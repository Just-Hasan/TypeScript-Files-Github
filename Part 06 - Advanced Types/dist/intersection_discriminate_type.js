"use strict";
const e1 = {
    name: "Hasan",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(employee) {
    console.log(`Name : ${employee.name}`);
    if ("privileges" in employee) {
        console.log(`Privileges : ${employee.privileges}`);
    }
    if ("startDate" in employee) {
        console.log(`Start Date : ${employee.startDate}`);
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
        console.log(`Driving a truck`);
    }
    loadCargo(amount) {
        console.log(`Loading cargo with amount of ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=intersection_discriminate_type.js.map