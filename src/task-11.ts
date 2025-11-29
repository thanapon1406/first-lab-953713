// function greet(name: string): void {
//   console.log("Hello, " + name + "!");
// }
// greet("John");

// function greet(name: string): string {
//   return "Hello, " + name + "!";
// }
// greet("John");
// console.log(greet("John"));

function score(studentScore: number[]): number {
  let total: number = 0;
  for (let s of studentScore) {
    total += s;
  }
  return total;
}

console.log(score([10, 20, 30]));
