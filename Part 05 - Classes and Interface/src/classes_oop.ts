abstract class Department {
  protected employees: string[];

  constructor(private name: string, protected readonly id: number) {
    this.employees = [];
    // this.name = name;
  }

  get listOfEmployees() {
    return this.employees;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  abstract describe(this: Department): void;

  printEmployeeInformation() {
    this.employees.forEach((employee, index) =>
      console.log(`${index + 1}. ${employee}`)
    );
  }
}

class ITDepartment extends Department {
  private admins: string[];
  constructor(name: string, id: number, public adminsArr: string[]) {
    super(name, id);
    this.admins = adminsArr;
  }
  addAdmins(name: string) {
    this.admins.push(name);
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  showAdmins() {
    console.log(this.admins);
  }

  describe(this: ITDepartment) {
    console.log(`IT - DEPARTMENT : ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  private static instance: AccountingDepartment;

  private constructor(name: string, id: number, initReports: string[]) {
    super(name, id);
    this.reports = initReports;
  }

  static getInstance(): AccountingDepartment {
    if (this.instance) {
      return this.instance;
    }
    return (this.instance = new AccountingDepartment("Accounting", 2, []));
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  // making a method that has similar name like the one exist in parent class will override the method
  describe(this: AccountingDepartment) {
    console.log(`Accounting Department - ID: ${this.id}`);
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

// const accounting = new AccountingDepartment("Accounting", 3, []);
const accounting = AccountingDepartment.getInstance();
const accountin2 = AccountingDepartment.getInstance();

// accounting department
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
accounting.describe();
console.log(accounting.getLastReport);
console.log(accounting.listOfEmployees);

// it department
it.showAdmins();
it.addEmployee("Hasan Basri");
it.describe();
console.log(it.listOfEmployees);
