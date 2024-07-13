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


const strarr = ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"];
const k_one = [
  "ejjjjmmtthh",
  "zxxuueeg",
  "aanlljrrrxx",
  "dqqqaaabbb",
  "oocccffuucccjjjkkkjyyyeehh",
];
const k = 3;

function longestConsec(strarr: string[], k: number): any {
  const conseString: string[] = [];
  if (k === 1) {
    const wordLengthArr = strarr.map((str) => str.length);
    const maxWordLength = Math.max(...wordLengthArr);
    const longestWord = strarr.find((word) => word.length === maxWordLength);

    if (longestWord === undefined) throw new Error("ERROR");

    return longestWord;
  }

  const properLength = strarr.length - k;

  for (let i = 0; i <= properLength; i++) {
    let tempString: string = "";
    for (let j = i; j <= k + i - 1; j++) {
      tempString += strarr[j];
    }
    conseString.push(tempString);
  }
  const maxConsecutiveString = Math.max(
    ...conseString.map((str) => str.length)
  );
  const firstLongestString = conseString.find(
    (str) => str.length === maxConsecutiveString
  );

  return firstLongestString;
}
const result = longestConsec(strarr, k);
console.log(result);
*/

/*
////////[Coding Challenge - 4 (Form The Minimum)]
const randomNumber: number[] = [1, 9, 3, 1, 7, 4, 6, 6, 7];
const minValue = (values: number[]): number => {
  return Number([...new Set(values)].sort().join(""));
};

const result = minValue(randomNumber);
console.log(result);
*/

/*
////////[Coding Challenge - 5 (Fix string case)]

function solve(str: string) {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  let numUppercase: number = 0;
  let numLowercase: number = 0;
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (uppercaseRegex.test(strArr[i])) {
      numUppercase++;
    } else if (lowercaseRegex.test(strArr[i])) {
      numLowercase++;
    }
  }
  return numUppercase <= numLowercase ? str.toLowerCase() : str.toUpperCase();
}

const result = solve("OPEn");
console.log(result);
*/

/*
////////[Coding Challenge - 6 Regex Test]
Make a regex that :
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
*/

/*
////////[Coding Challenge - 6 Multiplication Table]
Your task, is to create NxN multiplication table, of size
provided in paramater

Divide and conquer : 
1. If the size is 1, then return [[1]]
2. If the size is more than one, then :
   a. Create an empty array first
   b. Create an array with base iteration of the size
   c. Insert it to the result array
   
   function multiplicationTable(size: number): number[][] {
    if (size === 1) return [[1]];
    
    const resultArray: number[][] = [];
    for (let i = 1; i <= size; i++) {
      const tempArray = [];
      for (let j = i; j <= i * size; j += i) {
        tempArray.push(j);
      }
      resultArray.push(tempArray);
    }
    
    return resultArray;
  }
  
  const result = multiplicationTable(4);
  console.log(result);
  */

/*
  ////////[Coding Challenges - 7 Help the bookseller]

  1. Create an array of object with all of the category
  as prop with 0 quantity as its value.

  2. In each of the items of that array, loop over the
  quantity.

  3. If the items of the array matches with the loop
  item of the quantity, then increase the current item
  value by the value in the loop item

const listOfArt = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const listOfCat = ["A", "B", "C", "D"];
type item = { category: string; quantity: number };

const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  const testObject: item[] = [];

  const quantity = listOfArt.map((book) => {
    const category = book.split(" ")[0][0];
    const qty = parseInt(book.split(" ")[1]);
    return { [category]: qty };
  });

  for (let i = 0; i < listOfCat.length; i++) {
    let qtyAccumulate = 0;
    for (let j = 0; j < quantity.length; j++) {
      const category = Object.keys(quantity[j])[0];
      const value = quantity[j][category];
      if (listOfCat[i] === category) {
        qtyAccumulate += value;
      }
    }
    testObject.push({ category: listOfCat[i], quantity: qtyAccumulate });
  }

  const toStyleString = testObject
    .map((val) => `(${val.category} : ${val.quantity})`)
    .join(" - ");

  const allZero = testObject.every((value) => value.quantity === 0);

  if (allZero) return "";

  return toStyleString;
};

const result = stockList(listOfArt, listOfCat);
console.log(result);
  */

/*
////////[Coding Challenges - 8 ROT13]

How can you tell an extrovert from an introvert at
NSA?

How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Jonas Schmedtmann Problem-Solving structure :
1). Understanding The problem [OK]:
2). Divide & conquer:
    a. make a temp variable to store temporary results
    b. loop over the received string
    c. Check whether an alphabet is an uppercase or lowercase
    d. Use the single alphabet as a key to get the value.
        - Find the index where the key is the current item that we loop
        - after we got the index, use it ROT13_LOWERCASE OR ROT13_UPPERCASE
        - use the current str / looped items to get the value
        - add the value to the result variable
        
        // index signature in typescript, used when we don't know the name of the key of the property, but we already know the type of that key
type AlphabetObject = { [key: string]: string };

const ROT13_LOWERCASE: AlphabetObject[] = [
  { a: "n" },
  { b: "o" },
  { c: "p" },
  { d: "q" },
  { e: "r" },
  { f: "s" },
  { g: "t" },
  { h: "u" },
  { i: "v" },
  { j: "w" },
  { k: "x" },
  { l: "y" },
  { m: "z" },
  { n: "a" },
  { o: "b" },
  { p: "c" },
  { q: "d" },
  { r: "e" },
  { s: "f" },
  { t: "g" },
  { u: "h" },
  { v: "i" },
  { w: "j" },
  { x: "k" },
  { y: "l" },
  { z: "m" },
];

const ROT13_UPPERCASE = ROT13_LOWERCASE.map((alphabet) => {
  const key = Object.keys(alphabet)[0];
  const value: string = alphabet[key].toUpperCase();

  return { [key.toUpperCase()]: value };
});

function rot13(str: string): string | any {
  let result: string = "";

  const uppercase = ROT13_UPPERCASE.map((alphabet) => {
    const key = Object.keys(alphabet)[0];
    return key;
  }).join("");

  const lowercase = ROT13_LOWERCASE.map((alphabet) => {
    const key = Object.keys(alphabet)[0];
    return key;
  }).join("");

  for (let i: number = 0; i < str.length; i++) {
    if (lowercase.includes(str[i])) {
      const index = ROT13_LOWERCASE.findIndex((a) => {
        return Object.keys(a)[0] === str[i];
      });
      const decipheredAlphabet = ROT13_LOWERCASE[index][str[i]];
      result += decipheredAlphabet;
      //
    } else if (uppercase.includes(str[i])) {
      const index = ROT13_UPPERCASE.findIndex((a) => {
        return Object.keys(a)[0] === str[i];
      });
      const decipheredAlphabet = ROT13_UPPERCASE[index][str[i]];
      result += decipheredAlphabet;
      //
    } else {
      result += str[i];
    }
  }
  return result;
}

// wtf ahh solution
// // export function rot13(str: string): string {
//   return str.replace(/[a-z]/gi, l => String.fromCharCode(l.charCodeAt(0) + (l.toLowerCase() <= 'm' ? 13 : -13)));
// }
// const result = rot13("This is my first ROT13 excercise!");
// console.log(result);
        */

/*
////////[get domain name from a url]
function domainName(url){
  // Remove the protocol (http://, https://)
  url = url.replace(/^https?:\/\//, '');
  // Remove 'www.'
  url = url.replace(/^www\./, '');
  // Split the URL by '/' and take the first part
  let domain = url.split('/')[0];
  // Split the domain by '.' and take the first part
  let domainName = domain.split('.')[0];
  return domainName;
}
*/

/*
////////[Coding Challenges 9 - Count the digit]
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

function getOneDigit(n: number, d: number) {
  const numbersArray = new Array(n + 1)
  .fill(0)
  .map((_, i) => {
    let regex = new RegExp(`(?!${d})\\d`, "g");
    return String(i * i).replace(regex, "");
  })
  .filter((num) => String(num).includes(`${d}`))
  .join("");
  
  return numbersArray.length;
}

// Example usage

console.log(getOneDigit(25, 1));
*/

/*
////////[Count IP Address]
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

function toDecimal(str: string): number {
  return str
  .split(".")
  .reverse()
  .map((str, i) => Number(str) * Math.pow(256, i))
  .reduce((preVal, curVal) => preVal + curVal, 0);
}

function ipsBetween(start: string, end: string): number {
  return toDecimal(end) - toDecimal(start);
}

const result = ipsBetween("10.0.0.10", "10.0.1.0");

console.log(result);
*/

/*
////////[Coding Challenges 10 - Find the smallest]

You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

Problem-Solving structure :
1). Understanding The problem [UNDERSTOOD]:
2). Divide & conquer:
    a). Find the smallest number in the n
    b). If the smallest number turns out to be smaller than the first number in the n, then moves that smallest number to the first of the n
    c). If the smallest number turns out to be 0, then just remove the number greater than zero to the index of that zero

    1.3 (If the smallest number is already at the start of the digit)

      a. Find the second smallest number

      b. Find the index of the second smallest number in the arrayOfN cuz it's important

      c. Find the lastIndex of smallest num

      d. Insert that second smallest number after the last index of smallest number, this is done to make sure the second smallest number is always after the smallest number

      e. Splice the second smallest num from the arrayOfN

*/

function smallest(n: number): number[] | any {
  const arrayOfN = String(n)
    .split("")
    .map((n) => Number(n));

  const smallestNum = Math.min(...arrayOfN);
  const secondSmallestNum = arrayOfN.filter((n) => n !== smallestNum).sort()[0];
  const result: number[] = [];
  if (arrayOfN[1] === 0) {
    // if the index 1 is zero and there's a digit in front of it
    arrayOfN.splice(1, 1);
    result[0] = Number(arrayOfN.join(""));
    result[1] = 0;
    result[2] = 1;
  } else if (smallestNum < arrayOfN[0]) {
    // if the smallest num is zero
    const indexOfSmallestNum = arrayOfN.findIndex((n) => n === smallestNum);

    // removing the smallest from the array
    arrayOfN.splice(indexOfSmallestNum, 1);

    // adding the smallest num to the beginning
    arrayOfN.unshift(smallestNum);

    // number result after operation
    const thisResult = Number(arrayOfN.join(""));

    result[0] = thisResult;
    result[1] = indexOfSmallestNum;
    result[2] = 0;
  } else if (smallestNum === arrayOfN[0]) {
    // if the smallest number is already at the first place of the digit
    const lastIndexOfSmallest = arrayOfN.lastIndexOf(smallestNum);
    const indexOfSecondSmallest = arrayOfN.findIndex(
      (n) => n === secondSmallestNum
    );
    arrayOfN.splice(indexOfSecondSmallest, 1);
    arrayOfN.splice(lastIndexOfSmallest + 1, 0, secondSmallestNum);
    // arrayOfN.
    const thisResult = arrayOfN.join("");
    result[0] = Number(thisResult);
    result[1] = indexOfSecondSmallest;
    result[2] = lastIndexOfSmallest + 1;
  }
  return result;
}

const result = smallest(296837);
console.log(result);

// const test = String(285365)
//   .split("")
//   .map((n) => Number(n));
// console.log(test.lastIndexOf(2));
