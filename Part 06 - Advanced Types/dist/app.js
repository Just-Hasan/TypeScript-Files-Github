"use strict";
const errorBag = {
    username: "Username is not valid",
    email: "Email is not valid",
};
const student2 = 7;
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add2("Hasan", "Basri");
console.log(result);
const checkAvailability = 0 !== null && 0 !== void 0 ? 0 : "Delete Item";
const fetchedUserData = {
    id: "Yorha 2B",
    name: "2B",
    job: { title: "Special Unit 2B", description: "Annihilator Unit" },
};
if (0) {
    console.log("Siu");
}
console.log(fetchedUserData.name);
console.log(checkAvailability);
//# sourceMappingURL=app.js.map