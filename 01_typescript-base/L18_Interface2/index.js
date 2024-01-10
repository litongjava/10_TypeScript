var sayName = function (obj) {
    obj.print(obj.name);
};
var person = {
    name: "iwen",
    age: 20,
    print: function (name) {
        console.log(name);
    }
};
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.print = function (name) {
        console.log(name);
    };
    return Student;
}());
var s = new Student();
s.name = 'iwen';
sayName(person);
sayName(s);
