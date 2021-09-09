// ทดลองสร้าง function โดยรับ constructor มาแล้วจะเรียกใช้ function ใน function ที่เราประกาศอีกที
function Person(name , age , job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}
let person1 = new Person("Pat" , 40 , "Tester");
let person2 = new Person("Joe" , 20 , "Doctor");
person1.sayName();
person2.sayName();