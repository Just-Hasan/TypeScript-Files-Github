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
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 7] = "ADMIN";
    Role[Role["READ_ONLY"] = 8] = "READ_ONLY";
    Role[Role["AUTHOR"] = 9] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Hasan",
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
var favouriteActivity;
favouriteActivity = ["Sports", "Coding"];
// person.role = [1, "Creator"]; -> work
// person.role = [1, "Creator", 12]; -> won't work cuz role expect 2 element only
// person.role[0] = "1" -> won't work cuz first index expect a number
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("This person is an admin");
}
else {
    console.log("This person is not an admin");
}
