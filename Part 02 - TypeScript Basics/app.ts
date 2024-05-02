// Object Types
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Hasan",
//   age: 20,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "Author"],
// };
// person.role = [1, "Creator"]; -> work
// person.role = [1, "Creator", 12]; -> won't work cuz role expect 2 element only
// person.role[0] = "1" -> won't work cuz first index expect a number

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {
  ADMIN = 7,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Hasan",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favouriteActivity: string[];
favouriteActivity = ["Sports", "Coding"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("This person is an admin");
} else {
  console.log("This person is not an admin");
}
