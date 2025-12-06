// const greet1 = function greet(name: string) {
//   return "Hello " + name;
// };

// console.log(greet1("John"));

// const greet = (name: string) => "Hello " + name;

// console.log(greet("John"));

// const multiply = (x: number, y: number) => {
//   return x * y;
// };

// console.log(multiply(5, 10));

// สร้าง function ในรูปแบบ Arrow Functions โดยให้รับค่าตัวแปร สองค่า แล้วคืนค่าที่มีค่ามากกว่าออกมา
const test = (a: number, b: number) => {
  return { a: a * 2, b: b * 2 };
};

console.log(test(5, 10));
