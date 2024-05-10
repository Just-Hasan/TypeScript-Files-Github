"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describe() {
        console.log(`Department ${this.name} with id: ${this.id}`);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(name, id, adminsArr) {
        super(name, id);
        this.adminsArr = adminsArr;
        this.admins = adminsArr;
    }
    addAdmins(name) {
        this.admins.push(name);
    }
}
class AccountingDepartment extends Department {
    constructor(name, id) {
        super(name, id);
        this.reports = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
    }
    showReport() {
        this.reports.forEach((report) => console.log(report));
    }
}
const it = new ITDepartment("IT", 2, ["Mikasa", "Violet"]);
const accounting = new AccountingDepartment("Accounting", 3);
accounting.addReport("Prabomo Subianto has been elected as the 8th president of Indonesia");
accounting.addReport("Citizen of Indonesia has mistaken Dewi Sandra and Sandra Dewi as the same person");
accounting.addEmployee("Hasan");
accounting.printEmployeeInformation();
accounting.showReport();
//# sourceMappingURL=app.js.map