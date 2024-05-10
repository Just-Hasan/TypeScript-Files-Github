class Department {
  // private name: string;
  protected employees: string[];

  constructor(private name: string, private readonly id: number) {
    this.employees = [];
    // this.name = name;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  describe(this: Department) {
    console.log(`Department ${this.name} with id: ${this.id}`);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
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
}

class AccountingDepartment extends Department {
  private reports: string[] = [];
  constructor(name: string, id: number) {
    super(name, id);
  }

  // this class can use addEmployee bcz it's a sub-class of Department
  addEmployee(employee: string): void {
    // although we never initalize the employees field
    // this.employees refers to the employees inside of the parent class
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
  }
  showReport() {
    this.reports.forEach((report) => console.log(report));
  }
}

const it = new ITDepartment("IT", 2, ["Mikasa", "Violet"]);
const accounting = new AccountingDepartment("Accounting", 3);
accounting.addReport(
  "Prabomo Subianto has been elected as the 8th president of Indonesia"
);
accounting.addReport(
  "Citizen of Indonesia has mistaken Dewi Sandra and Sandra Dewi as the same person"
);
accounting.addEmployee("Hasan");
accounting.printEmployeeInformation();
accounting.showReport();
