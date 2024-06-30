"use strict";
function narcissistic(value) {
    const length = Number(String(value).length);
    const total = String(value)
        .split("")
        .reduce((prev, cur) => prev + Math.pow(Number(cur), length), 0);
    return value === total;
}
const result = narcissistic(8);
console.log(result);
//# sourceMappingURL=app.js.map