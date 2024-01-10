var a;
a = 10;
a = "Hello iwen";
a = [10, 20];
// console.log(a);
// 我们的使用Any类型的时候一定要注意，需要自己去处理类型判断的问题
var log = function (value) {
    var valueType = typeof value;
    console.log(valueType);
    if (valueType === 'number') {
        return "\u6570\u5B57\u7C7B\u578B\uFF1A".concat(value);
    }
    if (valueType === "string") {
        return "\u5B57\u7B26\u4E32\u7C7B\u578B:".concat(value);
    }
    throw new Error("类型错误");
};
console.log(log('ping'));
console.log(log(10));
// console.log(log([10,20]))
var c;
c = 10;
console.log(log(c));
var b;
b = [10, '123', true];
console.log(log(b));
