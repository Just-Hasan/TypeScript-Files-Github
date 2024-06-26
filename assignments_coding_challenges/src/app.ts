/*
////////[Coding Challenges - 1 (Exes and Ohs)]
Check to see if a string has the same amount of
'x' and 'o's. The method must return a boolean
and be case insensitive. The string can contain
any char.

If it doesn't have o or x inside of it, then just
return true
function xo(str: string): boolean {
    const lowerStr = str.toLowerCase();
    let o: number = 0;
    let x: number = 0;
    let other: number = 0;
    
    if (!lowerStr.includes("x") || !lowerStr.includes("o")) {
        return true;
    }
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            x++;
        } else if (str[i].toLowerCase() === "o") {
      o++;
    } else {
      other++;
}
}

return o === x ? true : false;
}
*/

/*
////////[Coding Challenges - 2 (Does my nymber look big in this)]
A Narcissitc Number (or Armstrong Number) is a positive number which is the
sum of its own digits, each raised to the power of the number of digits in a given
base. In this kata, we will restrict ourselves to decimal (base 10)

For example, take 153 (3 digits number)

= 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 = true

example not narsistic 
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

Divide and conquer : 
1. Know the length of the number
2. Test each digit of that number to the power of length of the number

function narcissistic(value: number): boolean {
  const length = Number(String(value).length);
  const total = String(value)
  .split("")
  .reduce((prev, cur) => prev + Math.pow(Number(cur), length), 0);

  return value === total;
}

const result = narcissistic(8);
console.log(result);
*/

/*
////////[Coding Challenges - 3 (Consecutive String)]

You are given an array(list) stararr of strings
and an integer k. Your task is to return the first
longest string consisting of k consecutive strings
taken in the array.

Divide and conquer :
1. If k = 1, return the longest char in the array :
   a. make an array contains the length of each word
   b. find the word with longest length

2. If the k is not one :
   a. Get the length of the array first
   b. The last index that concat the string forward is length
   of array minus k
   c

*/

const strArr = ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"];
const k_one = [
  "ejjjjmmtthh",
  "zxxuueeg",
  "aanlljrrrxx",
  "dqqqaaabbb",
  "oocccffuucccjjjkkkjyyyeehh",
];
const k = 3;

function longestConsec(strArr: string[], k: number): any {
  const conseString: string[] = [];
  if (k === 1) {
    const wordLengthArr = strArr.map((str) => str.length);
    const maxWordLength = Math.max(...wordLengthArr);
    const longestWord = strArr.find((word) => word.length === maxWordLength);

    if (longestWord === undefined) throw new Error("ERROR");

    return longestWord;
  }

  const properLength = strArr.length - k;

  for (let i = 0; i <= properLength; i++) {
    console.log(i);
  }
  const maxConsecutiveString = Math.max(
    ...conseString.map((str) => str.length)
  );
  const firstLongestString = conseString.find(
    (str) => str.length === maxConsecutiveString
  );
  console.log(conseString);
  return firstLongestString;
}
const result = longestConsec(strArr, 3);
console.log(result);
