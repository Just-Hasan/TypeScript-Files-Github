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
*/

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
