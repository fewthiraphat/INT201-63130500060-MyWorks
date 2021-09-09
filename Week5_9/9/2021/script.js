//สร้าง class พร้อม constructor
class Question {
  constructor(id, question) {
    this._id = id;
    this._question = question;
  }

  set id(id) {
    this._id = id;
  }
  set question(question) {
    this._question = question;
  }
  get id() {
    return this._id;
  }
  get question() {
    return this._question;
  }
  toString() {
    return `id: ${id} , question`;
  }
}

let quest1 = new Question(1, "What is your name?");
let quest2 = new Question(2, "How old are you?");
console.log(quest1._id);
console.log(quest2._id);
console.log(quest1._question);
console.log(quest2._question);