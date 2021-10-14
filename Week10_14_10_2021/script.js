let gameSet = ["Dota2", "CSGO", "LOL", "ROV"];
let gameSet2 = ["Underlord", "Clash of clans"];

// concat ใช้สำหรับการรวมกัน หากเป็น set ก็คือ union
console.log('--- concat ---')
let allGameSet = gameSet.concat(gameSet2);
console.log(`All Game Set : ${allGameSet}`);

// includes ใช้สำหรับเช็คว่าภายใน Array นั้นมีค่านี้อยู่ไหม
console.log('--- includes ---')
let numberSet = [1,2,3,4,5,6,7,8];
console.log(numberSet.includes(6));

// shift , unshift ใช้สำหรับการนำค่าตัวแรกออก และเป็นการนำค่าเข้าที่ตัวแรกของ Array
let numberSet2 = [1,2,3,4,5];
console.log('--- shift ---');
let numberShift = numberSet2.shift();
console.log(`shift: ${numberShift} Old Data : ${numberSet2}`)
console.log('--- unshift ---');
numberSet2.unshift(1);
console.log(numberSet2);

// forEach จะวิ่งแบบ for จนกว่าจะครบรอบ แล้วสามารถส่ง element ทำ function ได้ด้วย
let fruits = ["Apple", "Orange" , "Cherry"];
fruits.forEach(function getFruit(e){
    console.log(e);
});

// filterเปรียบเสมือนตัวกรองใน Array โดยจะต้องผ่าน function ที่เรากำหนดไว้
let ageSet = [15,17,18,20,25]
const checkAdult = (age) => {
    return age >= 18;
}
console.log(ageSet.filter(checkAdult));

// fill จะไว้ใช้เขียนแทนค่าใน Array
fruits = ["Apple" , "Banana", "Mango"];
fruits.fill("Grape")
console.log(fruits);

// findIndex ไว้หาค่า index ใน Array ต้องใส่เป็น function
const equals18 = (age) => {
    return age == 18;
}
ageSet = [16,17,18,19,20,21,22,23];
console.log(ageSet.findIndex(equals18));

// indexOf ไว้ใช้หาค่า index แต่จะต้่องส่ง parameter ที่เป็นค่าตรงๆเลย (literals)
console.log(ageSet.indexOf(18))

// pop , push  pop ใช้ถอดค่าจาก Array ตัวท้าย , push ใช้เพิ่มค่าใน Array โดยใส่ในตัวท้าย
let namePerson = ['Eddy','Natty','Cody']
namePerson.push('Monkey');
console.log(namePerson);
namePerson.pop();
console.log(namePerson);

// splice เป็นเหมือนการผ่า Array แล้วใส่ค่าลงไป
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1,0 , "Grape", "Cherry");
console.log(fruits);

// slice เป็นเหมือนการตัดค่าของ Array ออกไป สมชื่อกับ slice ที่ตัว Array
fruits = ["Banana", "Orange", "Apple", "Mango","Durian","Lemon","Watermelon"];
console.log(fruits.slice(2,5));

// map รับ element ไปจากนั้นเข้าไปผ่าน function จากนั้นจะ return มา
console.log(fruits.map(fruit => {
    return fruit;
}))