"use strict";
function smallest(n) {
    const arrayOfN = String(n)
        .split("")
        .map((n) => Number(n));
    const smallestNum = Math.min(...arrayOfN);
    const secondSmallestNum = arrayOfN.filter((n) => n !== smallestNum).sort()[0];
    const result = [];
    if (arrayOfN[1] === 0) {
        arrayOfN.splice(1, 1);
        result[0] = Number(arrayOfN.join(""));
        result[1] = 0;
        result[2] = 1;
    }
    else if (smallestNum < arrayOfN[0]) {
        const indexOfSmallestNum = arrayOfN.findIndex((n) => n === smallestNum);
        arrayOfN.splice(indexOfSmallestNum, 1);
        arrayOfN.unshift(smallestNum);
        const thisResult = Number(arrayOfN.join(""));
        result[0] = thisResult;
        result[1] = indexOfSmallestNum;
        result[2] = 0;
    }
    else if (smallestNum === arrayOfN[0]) {
        const lastIndexOfSmallest = arrayOfN.lastIndexOf(smallestNum);
        const indexOfSecondSmallest = arrayOfN.findIndex((n) => n === secondSmallestNum);
        arrayOfN.splice(indexOfSecondSmallest, 1);
        arrayOfN.splice(lastIndexOfSmallest + 1, 0, secondSmallestNum);
        const thisResult = arrayOfN.join("");
        result[0] = Number(thisResult);
        result[1] = indexOfSecondSmallest;
        result[2] = lastIndexOfSmallest + 1;
    }
    return result;
}
const result = smallest(296837);
console.log(result);
//# sourceMappingURL=app.js.map