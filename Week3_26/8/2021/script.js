// templete literals ใช้เพื่อเป็นการประกาศค่าตัวแปรใน String
const name = "Thiraphat";
const age = 19;
console.log(`Hello ${name} and I'm ${age} years old`);

// Explicit Conversions
//เป็นการที่เราแปลงค่านั้นๆ ด้วยวิธีการใช้ function เพื่อแปลงสำหรับจะะเอาไปเปรียบเทียบเช่น
let xString = "5";
let yString = "true";
let zString = "20";
let x = 5;
let y = true;
let z = 20;

// ใช้ = 3 ตัวแบบนี้ เพราะจะเปรียบเทียบทั้งค่าและ type
console.log(Number(xString) == x); // true
console.log(Boolean(yString) == y); //true
console.log(zString == String(z)); // true

console.log("Implicit Conversion")
// Implicits Conversions
// เป็นการที่ Javascript จะทำการแปลงค่าให้เราเพื่อเอาไปใช้ในการเปรียบเทียบ
console.log(xString == x); // true : xString -> 5
console.log(1 == y); //true : y -> 1
console.log(zString == z); // true : zString -> 20