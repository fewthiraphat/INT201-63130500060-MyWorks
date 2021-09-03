//สัปดาห์นี้เรียนเกี่ยวกับ Object


//นี่เป็นวิธีการประกาศ Object
const student = {
    id:1001,
    name:"Thiraphat",
    age:19
}

var arr = [3, 5, 7];

//ลองเรียกค่าใน Object ผ่านวิธีแบบ template literals
console.log(`id :${student.id} , name : ${student.name} , age:${student.age}`);

// for in เป็นการวิ่งเช็ค key ใน Object
//โดยเราระบุไว้ว่า ให้ s เป็นตัวที่จะเป็นค่าเมื่อเจอค่า key
for(let s in student){
    console.log(s)
    console.log(student[s]) // ตรงนี้เราใช้บอกว่าจะให้แสดงผลลัพธ์ โดยเอาค่าจาก Object แล้วบอกว่าจะเอาค่าไหนผ่าน s ที่เป็น key
}


// for of เอาค่าใน Array ออกมา
for(let s of arr){
    console.log(s)
}

//เราจะประกาศ object police ไว้เป็นเหมือนโครงของ police 
const police = new Object({name:"John" , age:20 , weapon : {main:"m4" , granade:false}})
//เราประกาศ newPolice ให้ไปใช้โครงสร้าง object ของ police
const newPolice = new Object(police);
// เราจะลองให้โปรแกรมแสดงค่าของ newPolice ดู
console.log(newPolice);