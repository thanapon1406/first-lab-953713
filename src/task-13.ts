// const add = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(add(1, 2));

// const add = (a: number, b: number) => {
//   return a + b;
// };
// const result = add(1, 2) + 0;
// console.log(result, "type of result:", typeof result);

// const add = (a: number, b: number): string => {
//   return (a + b).toString();
// };
// const result = add(1, 2) + 0;
// console.log(result, "type of result:", typeof result);

// ทดลองสร้าง function findMax ที่รับ list ของ number แล้วไปหาค่าที่มากที่สุด แล้วคืนค่าออกมา เป็น string ของค่านั้น (สามารถทดลองถาม GitHub copilot) ผ่าน Chat feature ของ Copilot ได้

const findMax = (numbers: number[]): string => {
  if (numbers.length === 0) {
    return "List is empty";
  }
  let max = 0;
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max.toString();
};

console.log(findMax([10, 5, 8, 20, 3]));
