// let x = 11;
// if (x > 10) {
//   console.log("x is more than 10");
// } else if (x < 5) {
//   console.log("x is less than 5");
// } else {
//   console.log("x is between 5 and 10");
// }

const studentScore = 81;
if (studentScore > 80) {
  console.log("A");
} else if (studentScore > 60) {
  console.log("B");
} else if (studentScore > 50) {
  console.log("C");
} else {
  console.log("F");
}

import add, { subtract } from "./funtion2";

const result = add(1, 2) + 0;
const result2 = subtract(1, 2) + 0;
console.log(result, "type of result:", typeof result);
console.log(result2, "type of result2:", typeof result2);
