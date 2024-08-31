// Generics digunakan ketika kita tau bahwa function kita akan digunakan oleh beberapa value yang memiliki tipe data berbeda dan kita ingin function kita tersebut dapat digunakan oleh tipe data yang berbeda

// In TypeScript, they allow the types of components and functions to be "SPECIFIED LATER" which allows them to be used in creating reusable components that can apply different use cases.

function getFirstElement<ElementType>(numArr: ElementType[]) {
  return numArr[0];
}

function arr<Array>() {}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ["siu", "cr7"];
const firstString = getFirstElement(strings);

console.log(firstString);

// example 2
const input = document.querySelector<HTMLInputElement>(".input");

// example 3
const a = [1, 2, 3];
a.map((b) => "siu");

// example 4 => artinya map ini akan memiliki string sebagai key dan number sebagai valuenya
const map = new Map<string, number>();
map.set("Hasan", 23);

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type BlogResponseType<Data> = {
  data: Data;
  like: number;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogType = BlogResponseType<{ title: string; description: string }>;

const response: UserResponse = {
  data: {
    name: "Hasan Basri",
    age: 20,
  },
  isError: false,
};

const blogResponse: BlogType = {
  data: {
    title: "Why TypeScript is cool",
    description:
      "TypeScript is a superset of JavaScript that adds static types to the language that can check the errors in our code during development",
  },
  like: 1,
};
