// es6 http://es6.ruanyifeng.com/#docs/class
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 类的概念：
var p = new Person();
p.name = 'ping';
p.age = 30;
console.log(p);
console.log(p.name, p.age);
