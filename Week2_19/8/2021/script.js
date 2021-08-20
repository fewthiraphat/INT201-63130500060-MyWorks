// var ใช้สำหรับประกาศตัวแปรแบบที่ทั้งประกาศตัวแปรใหม่ และใส่ค่าใหม่ได้
// และไม่เป็นแบบ blocking ด้วย
console.log("=========== การประกาศตัวแปร =================")
var myCat = "Cute"
function changeCat(){
    var myCat = "Still Cute"
    console.log(myCat)
}
changeCat()
console.log(myCat)

//let ใช้สำหรับประกาศตัวแปรที่สามารถใส่ค่าใหม่ได้
let myString = "Hello My name is Thiraphat"
console.log(myString)
myString = "Hi~ My name is Thiraphat"
console.log(myString)

//const จะเป็นการประกาศค่าตัวแปรที่ไม่สามารถประกาศตัวแปรนั้นใหม่และแทนค่าใหม่ได้
const myFavGame = "Minecraft"
// const = myFavGame = "Dota2" <-- แบบนี้ทำไม่ได้ 
function changeFavGame(){
    myFavGame = "Dota2"
    console.log(myFavGame)
}
// changeFavGame() <-- Dota2 ไม่สามารถ Resign ค่าได้
console.log(myFavGame)
//ชนิดตัวแปร
console.log("============ ชนิดตัวแปร ================")
//ประกาศเป็น String
const typeString = "Hello";
//ประกาศเป็น number
const typeNumber = 50.6;
//ประกาศเป็น boolean
const typeBool = true;
//ประกาศเป็น object
const dog = {
    name:"Lucky",
    color:"White",
    age:1.5
}
//ประกาศเป็น array
const favFruit = ["apple", "banana"]

// typeof เป็นวิธีการ check type ของตัวแปร
console.log(typeof(typeString))
console.log(typeof(typeNumber));
console.log(typeof(typeBool));
console.log(typeof(dog));
console.log(typeof(favFruit));