"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.name} with id: ${this.id}`);
    }
    printEmployeeInformation() {
        this.employees.forEach((employee, index) => console.log(`${index + 1}. ${employee}`));
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
    showAdmins() {
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(name, id, initReports) {
        super(name, id);
        this.reports = initReports;
        this.lastReport = this.reports[0];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    showReport() {
        this.reports.forEach((report) => console.log(report));
    }
    get getLastReport() {
        return this.reports[this.reports.length - 1];
    }
    set changeReport(change) {
        if (change.index < -1)
            throw new Error("Please insert positive number");
        if (change.index > this.reports.length - 1)
            throw new Error(`The index ${change.index} exceed reports length`);
        if (change.content === this.reports[change.index])
            return;
        if (!change.content)
            throw new Error("please insert valid content");
        this.reports[change.index] = change.content;
    }
}
const it = new ITDepartment("IT", 2, ["Mikasa", "Violet"]);
const accounting = new AccountingDepartment("Accounting", 3, []);
accounting.addReport("Prabomo Subianto has been elected as the 8th president of Indonesia");
accounting.addReport("Citizen of Indonesia has mistaken Dewi Sandra and Sandra Dewi as the same person");
accounting.addEmployee("Hasan");
accounting.addEmployee("Kujou Sara");
accounting.printEmployeeInformation();
accounting.changeReport = { index: 1, content: "Ronaldo won the world cup" };
accounting.showReport();
console.log(accounting.getLastReport);
//# sourceMappingURL=app.js.map