let arr1 = [10,'in progrss',true];
let arr2 = arr1;

let person = [
    {
        name:"Ann",
        age:23
    },
    {
        name:"Bob",
        age:25
    },
    {
        name:"Carl",
        age:22
    }
]

let color = [
    ['pink','red'],
    ['yellow','orage','brown']
]
console.log(arr2[1]);
console.log(person[0]); 
console.log(color[0][1]); //red

//เป็นการแบ่งตัวหนังสือที่ละตัวเป็น index ของค่า
let letters = [...'Hello world'];
console.log(letters)

// เป็นการสร้างพื้นที่ใน Array และสร้างค่าใน Array
let arr5 = new Array(10) // แบบนี้เป็นสร้างพื้นที่ให้ Array
let arr6 = new Array("Good" , true , "news" , true)

console.log(arr5);
console.log(arr6);