/**
 * 数组：
 *  数组的声明两种方式
 *      let names:string[] = ["iwen","ime"];
 *      let list:Array<number> = [10,20,30];
 * 
 *  一组数据
 *  一组相同类型的数据
 * 
 */

let names: string[] = ["Ping", "E", "Lee"];
console.log(names[0]);
let list: Array<number> = [10, 20, 30];
console.log(list[2]);
names.push("frank");
console.log(names);

// names.push(100);
// console.log(names);
names.map(function (ele, index) {
  console.log(ele);
})