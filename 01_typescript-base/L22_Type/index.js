/**
 * 断言和类型转换有点相似，但是并非真正的类型转换
 *
 */
var x = "hi iwen";
// 编译的时候，是不知道什么类型的！！！
var s = x.substring(0, 2);
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
var person = {};
person.name = "iwen";
