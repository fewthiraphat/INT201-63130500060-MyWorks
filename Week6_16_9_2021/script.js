// สัปดาห์นี้เรียนเกี่ยวกับ Object เป็นหลัก

const student = {name:"Thiraphat",age:19};
const student2 = student;
// Object ไม่ได้สร้างให้ แต่โยงไปยังที่เก็บของตัวเดิม
console.log(student2);
student2.name = "John";
console.log(student2)

// Array