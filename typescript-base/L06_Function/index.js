/**
 * 函数
 *  1.函数的声明，函数中的参数类型限定
 *  2.箭头函数 () => {} 箭头函数解决this问题
 *  3.函数的返回值问题:void
 *  4.可选参数和Rest Parameters
 */
// function add(a,b){
//   return a+b;
// }
// console.log(add(10,20));
// console.log(add(10,"20"));
// console.log(add(10,true));
// function add(a: number, b: number) {
//   return a + b
// }
// console.log(add(10, 20));
// function add(a: number, b: number = 10) {
//   return a + b
// }
// console.log(add(10));
// const add = (a: number, b: number) => {
//   return a + b
// }
// console.log(add(10, 20));
// setTimeout(() => {
//     console.log(100);
// },3000)
// let obj = {
//   username: "ping",
//   getName: function () {
//     setTimeout(function() {
//       console.log(this.username);
//     })
//   }
// }
// obj.getName()
// let obj2 = {
//   username: "ping",
//   getName: function () {
//     setTimeout(() => {
//       console.log(this.username);
//     })
//   }
// }
// obj2.getName()
// function add(a:number,b:number):number{
//   return a+b;
// }
// function add(a: number, b: number): string {
//   return a.toString() + b.toString();
// }
// console.log(add(10, 20));
// var sum = add(10,20);
// // console.log(sum.toFixed(2));
// console.log(sum.substr(0,3));
// function add(a: number, b: number): void {
//   console.log(a + b);
// }
// add(10, 20);
// function add(a: number,b:number,...num: number[]): number {
//   return num.reduce(function (sum, n) {
//     return sum + n;
//   }, a + b)
// }
// console.log(add(10, 20, 30, 40, 50));
function add(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(add(10));
console.log(add(10, 20));
