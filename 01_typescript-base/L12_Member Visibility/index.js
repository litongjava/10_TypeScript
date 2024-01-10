/**
 * Public:
 *     在任意地方都可以访问
 * private:
 *     只能在类的内部读取，不可以在外部读取，如果想读取，就在类的内部提供public的函数进行访问
 * protected:
 *     可以在类的内部访问，也可以在子类中进行访问
 *
 *
 * 三者关系：Public > protected > private
 *
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
    // set和get方法
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.say = function () {
        console.log("hello:".concat(this.getName()));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.setStudentName = function (name) {
        this.name = name;
    };
    Student.prototype.getStudentName = function () {
        console.log(this.name);
    };
    return Student;
}(Person));
var s = new Student();
s.setStudentName("Ping");
s.getStudentName();
