enum conversionType {
  AS_NUMBER = "as-number",
  AS_STRING = "as-string",
}

type Combinable = number | string;

type Person = {
  name: string;
  age: number;
  phoneNumber: number;
  hobbies: string[];
};

const hasan: {
  name: string;
  age: number;
  phoneNumber: number;
  hobbies: string[];
  // Basically it's like saying friends is a property that has value array of Person object types
  friends: Person[];
} = {
  name: "Hasan",
  age: 20,
  phoneNumber: 777,
  hobbies: ["Coding", "Reading", "Solving Problems"],
  friends: [
    {
      name: "Alun",
      age: 21,
      phoneNumber: 696,
      hobbies: ["Reading Qur'an", "Praying", "Writing"],
    },
  ],
};

function combine(input1: Combinable, input2: Combinable, type: conversionType) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (type === conversionType.AS_NUMBER) return Number(result);
  return result;
}

const combineAges = combine("30", "20", conversionType.AS_NUMBER);
console.log(combineAges);

const combineNames = combine("Hasan", "Violet", conversionType.AS_STRING);
console.log(combineNames);
