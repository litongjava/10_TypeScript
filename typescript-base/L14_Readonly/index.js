var Person = /** @class */ (function () {
    function Person() {
        // 不可以被修改的
        this.hello = 'Hello ReadOnly';
    }
    return Person;
}());
var p = new Person();
// p.hello = 'hello';
p.name = 'Ping';
console.log(p.hello);
console.log(p.name);
