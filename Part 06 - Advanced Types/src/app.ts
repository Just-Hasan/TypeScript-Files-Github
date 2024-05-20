////////[Index Properties]

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  username: "Username is not valid",
  email: "Email is not valid",
};

////////[Function Overloads]
type Combinable2 = string | number;
type Numeric2 = number | boolean;
type Universal2 = Combinable2 & Numeric2;
const student2: Universal2 = 7; // -> will have the 'number' type cuz, the 'number' type is in Combinable2 and Numeric2

function add2(a: string, b: string): string;
function add2(a: number, b: number): number;
function add2(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add2("Hasan", "Basri");
console.log(result);

////////[Optional Chaining]
interface fetchedUserTypes {
  id: string;
  name: string;
  job: { title: string; description: string };
}

type itemAvailability = number;
const checkAvailability: itemAvailability = 0 ?? "Delete Item";
const fetchedUserData: fetchedUserTypes = {
  id: "Yorha 2B",
  name: "2B",
  job: { title: "Special Unit 2B", description: "Annihilator Unit" },
};

if (0) {
  console.log("Siu");
}

console.log(fetchedUserData.name);
console.log(checkAvailability);
