// 数字   字符串
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
console.log(log('123'));
function isNumber(value) {
    return typeof value === "number";
}
function isString(value) {
    return typeof value === 'string';
}
var log2 = function (value) {
    console.log(typeof value);
    if (isNumber(value)) {
        return "\u6570\u5B57\u7C7B\u578B\uFF1A".concat(value);
    }
    if (isString(value)) {
        return "\u5B57\u7B26\u4E32\u7C7B\u578B:".concat(value);
    }
    // throw new Error("类型错误");
    console.log("function end");
};
console.log(log2("ping"));
console.log(log2(123));
console.log(log2(null));
console.log(log2(undefined));
