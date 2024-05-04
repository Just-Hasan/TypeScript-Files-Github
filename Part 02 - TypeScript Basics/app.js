function add(n1, n2) {
    return n1 + n2;
}
function printResult(n1, n2) {
    console.log("Result: ".concat(n1 + n2));
    return 7;
}
function greet(firstName, lastName, phrase) {
    return "".concat(phrase, " ").concat(firstName, " ").concat(lastName);
}
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
printResult(7, 7);
var combineValues;
var greetVariable;
greetVariable = greet;
combineValues = add;
combineValues = printResult;
// combineValues = 5;
console.log(combineValues(1, 2));
console.log(greetVariable("Hasan", "Basri", "Hello"));
addAndHandle(3, 5, function (res) { return console.log(res); });
