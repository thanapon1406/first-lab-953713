console.log("Hello, TypeScript with Node.js!");

let x: number | string = 10;
x = "hello";
if (typeof x === "string") {
  console.log("x is a string");
} else if (typeof x === "number") {
  console.log("x is a number");
} else {
  console.log("x is neither a string nor a number");
}

let i = 0;
i = "hello" as any;
console.log(i);

let b = 10;
b = 15;
console.log(b);

// const a = 10;
// a = 15;
// console.log(a);

interface Person {
  name: string;
  age: number;
}

// const a: Person = {
//   name: "Alice",
//   age: 30,
// };

// a = {
//   name: "Bob",
//   age: 25,
// };
// console.log(a);

let a: Person = {
  name: "Alice",
  age: 30,
};

a.name = "Bob";
a.age = 25;
console.log(a);

const list = [1, 2, 3, 4, 5];
console.log(list);
