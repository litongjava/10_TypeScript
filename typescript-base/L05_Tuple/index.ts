/**
 * 元组
 *  元组类型允许表示一个已知元素数量和类型的数组
 */

let info: [string, number, boolean] = ['iwen', 20, true];
info[0]="ami";
console.log(info[0]);

info.filter(function (ele) {
  console.log(ele);
})