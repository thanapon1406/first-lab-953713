// const object = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// console.log(object);

// const object2 = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// console.log(object2.name);

const object = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(object.name);
const jsonStr = JSON.stringify(object);
console.log("Object: ", object);
console.log("json String: ", jsonStr);

// โปรดสังเกตุความแตกต่างระหว่างผลลัพธ์ที่ได้จากการ พิมพ์ object โดยตรงและพิมพ์ object หลังจากที่ผ่าน funciton JSON.stringify(object)
// ให้สร้าง function ที่รับ object ของนักศึกษา ที่ประกอบไปด้วยข้อมูลชื่อ นามสกุล อายุ เกรดเฉลี่ย จากนั้น ตรวจสอบว่าเกรดเฉลี่ยมีค่ามากกว่า 2 หรือไม่ ถ้าเกินให้แปลง object เป็น String และคืนค่ามา ถ้าไม่เกิน ให้ คืนคำว่า “คุณ (ชื่อ) พ้นสภาพ”

const studentDetail = {
  firstName: "Thanaphon",
  lastName: "Sarnsamuth",
  age: 22,
  gpa: 1.5,
};

const checKStatus = (studentDetail: any) => {
  if (studentDetail.gpa > 2) {
    return JSON.stringify(studentDetail);
  } else {
    return `คุณ ${studentDetail.firstName} พ้นสภาพ`;
  }
};

console.log(checKStatus(studentDetail));
