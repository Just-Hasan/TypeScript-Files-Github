class Department {
  protected employees: string[];

  constructor(private name: string, private readonly id: number) {
    this.employees = [];
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.name} with id: ${this.id}`);
  }

  printEmployeeInformation() {
    this.employees.forEach((employee, index) =>
      console.log(`${index + 1}. ${employee}`)
    );
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(name: string, id: number, public adminsArr: string[]) {
    super(name, id);
    this.admins = adminsArr;
  }
  addAdmins(name: string) {
    this.admins.push(name);
  }
  showAdmins() {
    console.log(this.admins);
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  private lastReport: string;

  constructor(name: string, id: number, initReports: string[]) {
    super(name, id);
    this.reports = initReports;
    this.lastReport = this.reports[0];
  }

  // // this class can use addEmployee bcz it's a sub-class of Department
  addEmployee(employee: string): void {
    // although we never initalize the employees field
    // this.employees refers to the employees inside of the parent class
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  showReport() {
    this.reports.forEach((report) => console.log(report));
  }

  // getter function, this will be called as a property and must always return something
  get getLastReport() {
    return this.reports[this.reports.length - 1];
  }

  set changeReport(change: { index: number; content: string }) {
    if (change.index < -1) throw new Error("Please insert positive number");

    if (change.index > this.reports.length - 1)
      throw new Error(`The index ${change.index} exceed reports length`);

    if (change.content === this.reports[change.index]) return;

    if (!change.content) throw new Error("please insert valid content");

    this.reports[change.index] = change.content;
  }
}

const it = new ITDepartment("IT", 2, ["Mikasa", "Violet"]);
const accounting = new AccountingDepartment("Accounting", 3, []);

accounting.addReport(
  "Prabomo Subianto has been elected as the 8th president of Indonesia"
);

accounting.addReport(
  "Citizen of Indonesia has mistaken Dewi Sandra and Sandra Dewi as the same person"
);

accounting.addEmployee("Hasan");
accounting.addEmployee("Kujou Sara");
accounting.printEmployeeInformation();
accounting.changeReport = { index: 1, content: "Ronaldo won the world cup" };
accounting.showReport();
console.log(accounting.getLastReport);
