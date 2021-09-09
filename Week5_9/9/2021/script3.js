// ทดลองสร้าง Class จากนั้นเช็คว่ามีค่าเข้ามาใน constructor ไหม
class Question{
    constructor(id , question){
        this._id = id;
        this._question = question;
        if(id == undefined){
            this._id = "Don't have ID";
        }
        if(question == undefined){
            this._question = "Don't have content about question";
        }
    }
}

let question1 = new Question(1,"What is your name?");
let question2 = new Question(2,"How old are you?");
let question3 = new Question();

console.log(question1._id);
console.log(question2._id);
console.log(question3._id);
console.log("===================")
console.log(question1._question);
console.log(question2._question);
console.log(question3._question);