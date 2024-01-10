/**
 * 
 * var  
 * let
 *     1.作用域变化  var作用域是函数级别  let作用域是花括号
 *     2.let不允许重复定义
 * const
 *     1.constant:常量，定义之后不允许修改的值     
 * 
 */

var num: number = 10;
var num: number = 40;
console.log(num);
let age: number = 30;
// let age: number = 30;
console.log(age);

// if (true) {
//   var demo: string = 'var demo'
// }
// console.log(demo)

// if (true) {
//   let demo: string = 'let demo'
// }
// console.log(demo);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   })
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   })
// }


const url: string = "http://iwenwiki.com";
// url = "http://iwens.org";
console.log(url);
