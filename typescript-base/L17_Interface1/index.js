/**
 * 鸭子类型：
 * 接口：通过的规范
 *      USB接口：U盘  打印机 ...
 *
 * ts:编译时候直接报错，而非在运行过程中因为某些不确定的因素而报错
 */
var sayName = function (obj) {
    console.log(obj.name);
};
var Person = {
    name: 'iwen',
    age: 20
};
var student = {
    learn: "web",
    name: "张三"
};
var demo = {
    name: "hello"
};
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var t = new Teacher();
t.name = '张老师';
sayName(Person);
sayName(student);
sayName(t);
sayName(demo); // undefined
