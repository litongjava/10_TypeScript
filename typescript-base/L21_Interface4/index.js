var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.say = function () {
        console.log("say");
    };
    return Student;
}());
var s = new Student();
s.name = "iwen";
s.learn = "web";
console.log(s.name);
s.say();
