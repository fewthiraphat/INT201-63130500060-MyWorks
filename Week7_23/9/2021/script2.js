// การประกาศฟังก์ชั่น โดยเราให้ฟังก์ชั่นนี้รับค่า parameter ด้วย
function getTeacherName (name, age, ...student){
    return `${name} ${age} having student ${student}`
}

// สามารถดำเดินการทางคณิตศาสตร์ได้ใน function
function getAreaOfCircle(r){
    return 3.14 * r * r;
}

// เรียกใช้ function และส่งค่า
console.log(getTeacherName("Thiraphat", 18 , ['Jack','Devid','Mark']));
console.log(getAreaOfCircle(10))

// นำฟังก์ชั้นมาเขียนแบบ Arraow Function
const getTeacherName2 = (name, age, ...student) =>{
    return `${name} ${age} having student ${student}`
}

// สามารถดำเดินการทางคณิตศาสตร์ได้ใน function
const getAreaOfCircle2 = (r) => {
    return 3.14 * r * r;
}
