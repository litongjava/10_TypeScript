var sayWath = function (content) {
    content.say();
};
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.say = function () {
        console.log(this.name);
    };
    return Student;
}());

var Tearch = /** @class */ (function () {
    function Tearch(name) {
        this.name = name;
    }
    Tearch.prototype.say = function () {
        console.log(this.name);
    };
    return Tearch;
}());
var s = new Student("我要讨论学习");
var t = new Tearch("如何教好学生");
s.say();
sayWath(s);
t.say();
sayWath(t);
