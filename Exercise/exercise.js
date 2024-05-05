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
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 1] = "NORTH";
    Direction[Direction["SOUTH"] = -1] = "SOUTH";
    Direction[Direction["WEST"] = 1] = "WEST";
    Direction[Direction["EAST"] = -1] = "EAST";
})(Direction || (Direction = {}));
function isValidWalk(walks) {
    if (walks.length > 10)
        return false;
    var north = 0;
    var south = 0;
    var west = 0;
    var east = 0;
    for (var _i = 0, walks_1 = walks; _i < walks_1.length; _i++) {
        var walk = walks_1[_i];
        if (walk === "n") {
            console.log(walk);
            north += 1;
        }
        else if (walk === "s") {
            south += 1;
        }
        else if (walk === "w") {
            west += 1;
        }
        else {
            east += 1;
        }
    }
    var backAndForth = north - south;
    var leftToRight = west - east;
    var isBack = backAndForth === 0 && leftToRight === 0;
    return isBack;
}
var result = isValidWalk([
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
