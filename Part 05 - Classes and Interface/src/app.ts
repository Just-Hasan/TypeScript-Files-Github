interface Employee {
  name: string;
  age: number;
  address: string;
}

class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

const employee1: Employee = {
  name: "Mikasa Ackerman",
  age: 18,
  address: "Wall Maria",
};

accounting.addEmployees("Kujou Sara");
accounting.addEmployees("Mikasa Ackerman");

accounting.describe();
accounting.printEmployeeInformation();
