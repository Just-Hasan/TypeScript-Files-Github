/*
/////////////////////////////////////[Stop gninnipS My sdroW!]
Write a function that takes in a string of one or
more words, and returns the same string, but with all words
that have five or more letters reversed.

function spinWords(word: string, callback: (word: string) => string): string {
  const splitWord = word.split(" ");
  let resultWord: string[] = [];

  for (const word of splitWord) {
    if (word.length >= 5) {
      resultWord.push(callback(word));
    } else {
      resultWord.push(word);
    }
  }

  return resultWord.join(" ");
}

function reverse(word: string): string {
  const result = word.split("").reverse().join("");
  return result;
}

const reverseWord = spinWords("Hey fellow warriors", reverse);
console.log(reverseWord);
*/
/*
/////////////////////////////////////[Take a ten minutes walk]

enum Direction {
  NORTH = 1,
  SOUTH = -1,
  WEST = 1,
  EAST = -1,
}

function isValidWalk(walks: string[]): boolean {
  if (walks.length !== 10) return false;

  let north: number = 0;
  let south: number = 0;
  let west: number = 0;
  let east: number = 0;
  for (const walk of walks) {
    if (walk === "n") {
      console.log(walk);
      north += 1;
    } else if (walk === "s") {
      south += 1;
    } else if (walk === "w") {
      west += 1;
    } else {
      east += 1;
    }
  }

  const backAndForth = north - south;
  const leftToRight = west - east;
  const isBack = backAndForth === 0 && leftToRight === 0;

  return isBack;
}

const result = isValidWalk([
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
]);

console.log(result);
*/
/*
/////////////////////////////////////[Duplicate Count]
Write a function that will return he count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Problem-Solving structure :
1). Understanding The problem:
    UNDERSTOOD
2). Divide & conquer:
    a. Make an array that stored the duplicate
    b. Turn the text to array
    c. Loop the converted text array
    d. Check the current looped element, if it's not in the array that stored the duplicate element then append it there.
    e. If the element already exists in the storedDuplicate variable, then just skips it.
    d. Return the length of the storedDuplicate array variable

function duplicateCount(text: string): number {
  const textArr = text.toLowerCase().split("");
  const textSet = new Set(textArr);
  const textSetArray = Array.from(textSet);
  const duplicateChar: string[] = [];

  for (let i = 0; i < textSetArray.length; i++) {
    let count = 0;
    for (let j = 0; j < textArr.length; j++) {
      if (textSetArray[i] === textArr[j]) {
        count++;
      }
    }
    if (count >= 2) {
      duplicateChar.push(textSetArray[i]);
    }
  }

  return duplicateChar.length;
}

console.log(duplicateCount("aabbcde"));
*/
/*
/////////////////////////////////////[Find the Odd Int]
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


const findOdd = (xs: number[]): number => {
  const uniqueNumber = Array.from(new Set(xs));
  let oddInt = 0;

  for (let i = 0; i < uniqueNumber.length; i++) {
    const occurance = xs.filter((num) => num === uniqueNumber[i]).length;
    if (occurance % 2 !== 0) oddInt = uniqueNumber[i];
  }

  return oddInt;
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
*/
/*
/////////////////////////////////////[Sum of Numbers]
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a: number, b: number): number {
  if (a === b) return a;
  const arr = [a, b].sort();

  let sum = 0;

  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i += 1) {
      sum += i;
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i += 1) {
      sum += i;
    }
  }

  return sum;
}

console.log(getSum(-2, -34));
*/
function nthSmallest(arr, n) {
    return arr.flat().sort(function (a, b) { return a - b; })[n - 1];
}
console.log(nthSmallest([
    [2, 8, 12],
    [4, 6, 10],
], 5));
