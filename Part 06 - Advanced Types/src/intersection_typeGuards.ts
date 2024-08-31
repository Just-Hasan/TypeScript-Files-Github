////////[Intersection Types]
// Intersection Type adalah ketika kita menggabungkan dua custom type menjadi satu type menggunakan simbol '&', dan ini artinya, ketika kita mendefinisikan variable menggunakan type hasil dari gabungan dua type sebelumnya, maka variable tersebut harus memiliki semua property dari kedua type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Hasan",
  privileges: ["create-server"],
  startDate: new Date(),
};

// Karena Universal adalah hasil intersection dari type Combinable dan Numeric, type Universal akan memiliki tipe data number, karena pada dasarnya, intersection dari Combinable dan Numeric berarti mengambil tipe data yang sama dari kedua type tersebut
type Combinable = string | number;
type Numeric = number | Date;

type Universal = Combinable & Numeric;
// const nomor: Universal = "7"❌
// const nomor: Universal = 7 ✅

////////[Type Guards]
// Seperti namanya, konsep type guards digunakan untuk memeriksa tipe data dari value yang kita miliki
function add(a: Combinable, b: Combinable): string | number {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  // Keyword in adalah salah satu fitur JavaScript yang bisa kita gunakan untuk memeriksa apakah suatu property benar - benar ada di dalam object, di kasus ini kita memeriksa apakah property privileges ada di object employee
  console.log(`Name : ${employee.name}`);
  if ("privileges" in employee) {
    console.log(`Privileges : ${employee.privileges}`);
  }

  if ("startDate" in employee) {
    console.log(`Start Date : ${employee.startDate}`);
  }
}

printEmployeeInformation(e1);

////////[Type Guards di Class]
class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck`);
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo with amount of ${amount}`);
  }
}

type Vehicle = Car | Truck;
const v1: Vehicle = new Car();
const v2: Vehicle = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // instanceof adalah salah satu fitur JavaScript yang bisa kita gunakan untuk memeriksa apakah suatu object adalah hasil instantiation dari suatu class
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
