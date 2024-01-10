/**
 * 把类看成一个模板
 *     worker
 *     student
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log("我是说话");
    };
    Person.prototype.hello = function () {
        console.log("hello World");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 就近原则
    Student.prototype.say = function () {
        console.log("我是student的say方法");
    };
    Student.prototype.hello = function () {
        console.log("student Hello");
    };
    Student.prototype.studentHello = function () {
        // 强行调用父类的方法
        _super.prototype.hello.call(this);
    };
    return Student;
}(Person));
var p = new Person();
p.say();
var s = new Student();
s.say();
// 多态
var s2 = new Student();
s2.say();
//编译报错
//s2.studentHello();
