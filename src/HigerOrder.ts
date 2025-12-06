// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);

// const n = [1, 2, 3, 4, 5];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);

// เขียนโปรแกรมเพื่อ รับ list ของตัวเลข โดยเมื่อรับค่ามาแล้วให้เลือกเฉพาะเลขที่หารด้วย 3 ลงตัว แล้วนำค่าที่ได้มายกกำลังสาม แล้วคืนค่า list ที่ได้ออกมา
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const result = numbers.filter((num) => num % 3 === 0);

console.log(result.map((num) => num ** 3));
