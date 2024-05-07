"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Department ${this.name}`);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
const employee1 = {
    name: "Mikasa Ackerman",
    age: 18,
    address: "Wall Maria",
};
accounting.addEmployees("Kujou Sara");
accounting.addEmployees("Mikasa Ackerman");
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map