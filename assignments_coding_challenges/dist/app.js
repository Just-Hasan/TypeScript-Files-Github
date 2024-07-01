"use strict";
const strArr = ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"];
const k_one = [
    "ejjjjmmtthh",
    "zxxuueeg",
    "aanlljrrrxx",
    "dqqqaaabbb",
    "oocccffuucccjjjkkkjyyyeehh",
];
const k = 3;
function longestConsec(strArr, k) {
    const conseString = [];
    if (k === 1) {
        const wordLengthArr = strArr.map((str) => str.length);
        const maxWordLength = Math.max(...wordLengthArr);
        const longestWord = strArr.find((word) => word.length === maxWordLength);
        if (longestWord === undefined)
            throw new Error("ERROR");
        return longestWord;
    }
    const properLength = strArr.length - k;
    for (let i = 0; i <= properLength; i++) {
        console.log(i);
    }
    const maxConsecutiveString = Math.max(...conseString.map((str) => str.length));
    const firstLongestString = conseString.find((str) => str.length === maxConsecutiveString);
    console.log(conseString);
    return firstLongestString;
}
const result = longestConsec(strArr, 3);
console.log(result);
//# sourceMappingURL=app.js.map