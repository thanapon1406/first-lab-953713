// let i = 0;
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// let color = ["red", "blue", "green", "yellow", "orange", "purple"];
// for (let i = 0; i < color.length; i++) {
//   console.log(color[i]);
// }

let name: string[] = ["Anna", "Bob", "Charlie", "David", "Eva"];
for (let i = 0; i < name.length; i++) {
  let number = 0;
  if (typeof name[i]?.length === "number") {
    number = Number(name[i]?.length);
  }
  if (number > 6) {
    console.log(`สวัสดีคุณ ${name[i]}`);
  } else {
    console.log(`Hello ${name[i]}`);
  }
}
