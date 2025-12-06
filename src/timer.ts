// Update function นี้ให้แสดงผลคำว่า hello world ทุกๆ 3 วินาที และให้คำว่า world เพิ่มขึ้นทุกครั้งที่พิมพ์ออกมา
const waitAndPrint = (message: string, delay: number) => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log((message += " world"));
    }, delay * (i + 1));
  }

  //   let count = 0;
  //   while (true) {
  //     setTimeout(() => {
  //       console.log((message += " world"));
  //     }, delay * (count + 1));
  //     count++;
  //   }
};

// Example usage:
waitAndPrint("hello world", 3000);
